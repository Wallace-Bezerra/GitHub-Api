import { useContext, useRef, useState } from "react";
import { RepositoriesI, UserContext } from "../context/UserContext";

export const useFetchData = () => {
  const [isLoading, setIsLoading] = useState(false);
  const lastPage = useRef<number>(1);
  // const [order, setOrder] = useState("desc");
  const {
    UserData,
    setRepositories,
    repositories,
    page,
    setPage,
    order,
    setOrder,
  } = useContext(UserContext);

  const FetchData = async () => {
    try {
      console.log("TESTEEEEEE");
      setIsLoading(true);
      const result = await fetch(
        `https://api.github.com/users/${UserData.login}/repos?&per_page=10&page=${page}&sort=pushed&direction=${order}`,
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
            isFavorite: false,
          };
        };
        return getFetch();
      });
      const resposeRepositoriesFetch = await Promise.all(repositoriesFetch);
      setRepositories([...repositories, ...resposeRepositoriesFetch]);
      setIsLoading(false);
    } catch (error) {
      // setError(true);
      // navigate("/404");
    }
  };

  return { isLoading, lastPage, page, setPage, FetchData, order, setOrder };
};
