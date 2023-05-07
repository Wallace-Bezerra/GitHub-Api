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
  const lastPage = useRef<number>(1);
  const elementLast = useRef<HTMLDivElement | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { UserData, setRepositories, repositories } = useContext(UserContext);

  useEffect(() => {
    console.log(lastPage.current, "lastPage");
    if (page <= lastPage.current) {
      FetchData();

      // return console.log("Não há mais repositórios");
    } else {
      console.log("Não há mais repositórios");
    }

    console.log(elementLast);
    return () => {
      if (page >= 1 && window.location.pathname === "/user/repositories") {
        return;
      }
      setRepositories([]);
    };
  }, [UserData, page]);
  console.log(elementLast);

  useEffect(() => {
    let options = {
      // root: document.querySelector("test"),
      rootMargin: "-20px",
      threshold: 1.0,
    };
    let observer = new IntersectionObserver((entries: any) => {
      if (entries[0].isIntersecting) {
        console.log("To vendooo");
        if (page <= lastPage.current!) {
          setPage((prev) => prev + 1);
        }
      }
    }, options);
    console.log("element", elementLast.current);
    // observer.observe(document.querySelector<HTMLDivElement>(".last")!);
    observer.observe(elementLast.current!);
    return () => {
      observer.disconnect();
    };
  }, []);
  console.log(isLoading);
  const FetchData = async () => {
    try {
      setIsLoading(true);
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
      result.headers
        .get("link")
        ?.split(",")
        .forEach((i) => {
          if (i.includes("last")) {
            const urlPage = i.split(";")[0].replace("<", "");
            lastPage.current = Number(
              new URL(urlPage).searchParams.get("page")
            );
            console.log(lastPage.current);
          }
        });

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
      setIsLoading(false);
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
          if (page !== lastPage.current) {
            setPage((prev) => prev + 1);
          }
        }}
      >
        carregar mais
      </button>
      <Wrapper>
        <RepositoriesContainer>
          <CardRepository elementLast={elementLast} isLoading={isLoading} />
        </RepositoriesContainer>
      </Wrapper>
    </>
  );
};

export default memo(Repositories);
