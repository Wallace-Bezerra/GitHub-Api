import {
  useCallback,
  useContext,
  useEffect,
  memo,
  useState,
  useRef,
} from "react";
import { Filter } from "../../components/Filter";
import { CardRepository } from "./components/CardRepository";
import { RepositoriesContainer, Wrapper } from "./styles";
import { UserContext } from "../../context/UserContext";

const Repositories = () => {
  const [page, setPage] = useState(1);
  // const lastpage = useRef<number>();
  const { UserData, setRepositories, repositories } = useContext(UserContext);
  let lastPage: any;
  useEffect(() => {
    console.log(lastPage, "lastPage");
    if (page == lastPage) {
      // return console.log("Não há mais repositórios");
    }
    FetchData();
    return () => {
      if (page >= 1 && window.location.pathname === "/user/repositories") {
        return;
      }
      setRepositories([]);
    };
  }, [UserData, page]);
  console.log(page, "page");

  const FetchData = async () => {
    try {
      const result = await fetch(
        `https://api.github.com/users/${UserData.login}/repos?&per_page=10&page=${page}&sort=pushed`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_SOME_KEY} `,
          },
        }
      );
      if (result.status === 404) {
        throw new Error("Não existe");
      }
      // console.log(result.headers.get("link"));

      result.headers
        .get("link")
        ?.split(",")
        .forEach((i) => {
          if (i.includes("last")) {
            const urlPage = i.split(";")[0].replace("<", "");
            // lastPage = urlPage;
            lastPage = new URL(urlPage).searchParams.get("page");
            console.log(lastPage);
          }
        });

      // ); logica para paginação

      const data = await result.json();
      console.log("repos", data);
      const repositoriesFetch = data.map((repo: any) => {
        const getFetch = async () => {
          const FetchCommits = await fetch(
            `https://api.github.com/repos/${UserData.login}/${repo.name}/commits`,
            {
              method: "GET",
              headers: {
                Authorization: `Bearer ${import.meta.env.VITE_SOME_KEY} `,
              },
            }
          );
          const FetchLanguages = await fetch(
            `https://api.github.com/repos/${UserData.login}/${repo.name}/languages`,
            {
              method: "GET",
              headers: {
                Authorization: `Bearer ${import.meta.env.VITE_SOME_KEY} `,
              },
            }
          );
          return {
            commits: await FetchCommits.json(),
            languages: await FetchLanguages.json(),
            language: repo.language,
            name: repo.name,
            id: repo.id,
            pushed_at: repo.pushed_at,
            html_url: repo.html_url,
          };
        };
        return getFetch();
      });
      const RESPONSE = await Promise.all(repositoriesFetch);
      setRepositories([...repositories, ...RESPONSE]);
      // setRepositories(() => {
      //   return RESPONSE;
      // });
      console.log(RESPONSE);
    } catch (error) {
      // setError(true);
      // navigate("/404");
    }
  };

  return (
    <>
      <Filter />
      <button
        style={{
          color: "black",
          position: "absolute",
          top: "50px",
          left: "200px",
        }}
        onClick={() => {
          setPage((prev) => prev + 1);
        }}
      >
        carregar mais
      </button>
      <Wrapper>
        <RepositoriesContainer>
          <CardRepository />
        </RepositoriesContainer>
      </Wrapper>
    </>
  );
};

export default memo(Repositories);
