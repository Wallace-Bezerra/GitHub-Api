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
import { RepositoriesI, UserContext } from "../../context/UserContext";
import { NotFind } from "../../components/NotFind";

const Repositories = () => {
  const [page, setPage] = useState(1);
  const lastPage = useRef<number>(1);
  const elementLast = useRef<HTMLDivElement | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isNotFind, setIsNotFind] = useState(false);
  const { UserData, setRepositories, repositories } = useContext(UserContext);
  let observer: IntersectionObserver;
  useEffect(() => {
    console.log(lastPage.current, "lastPage");
    console.log("page", page);
    if (page <= lastPage.current) {
      FetchData();

      // return console.log("Não há mais repositórios");
    } else {
      console.log("Não há mais repositórios");
      setIsNotFind(() => true);
    }

    // console.log(elementLast);
    return () => {
      if (page >= 1 && window.location.pathname === "/user/repositories") {
        return;
      }
      setRepositories([]);
    };
  }, [UserData, page]);
  // console.log(elementLast);

  const callback: IntersectionObserverCallback = (entries) => {
    console.log(entries);
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        console.log("To vendooo");

        console.log(page, lastPage.current);
        // if (page <= lastPage.current!) {
        //   setPage((prev) => prev + 1);
        // }

        if (page < lastPage.current) {
          setPage((prev) => prev + 1);
        }
      }
    });
  };
  useEffect(() => {
    let options = {
      rootMargin: "-20px",
      threshold: 1.0,
    };

    observer = new IntersectionObserver(callback, options);
    console.log("element", elementLast.current);
    // observer.observe(document.querySelector<HTMLDivElement>(".last")!);
    elementLast.current = document.querySelector<HTMLDivElement>(".last");
    observer.observe(elementLast.current!);
    return () => {
      observer.disconnect();
    };
  }, []);
  // console.log(isLoading);
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

      const data: RepositoriesI[] = await result.json();
      console.log("repos", data);
      const repositoriesFetch: Promise<RepositoriesI>[] = data.map((repo) => {
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
          const commits = await FetchCommits.json();
          return {
            id: repo.id,
            name: repo.name,
            commits: commits.length,
            languages: await FetchLanguages.json(),
            language: repo.language,
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
      {/* <div
        style={{
          color: "white",
          position: "absolute",
          top: "50px",
          left: "500px",
        }}
      >
        <div>Pagina atua{page}</div>
        <div>ultima pagina{lastPage.current}</div>
      </div> */}
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
          <CardRepository isLoading={isLoading} />
          {isNotFind && <NotFind />}
          <div className="last"></div>
        </RepositoriesContainer>
      </Wrapper>
    </>
  );
};

export default memo(Repositories);
