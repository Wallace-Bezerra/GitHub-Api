import { useCallback, useContext, useEffect, memo } from "react";
import { Filter } from "../../components/Filter";
import { CardRepository } from "./components/CardRepository";
import { RepositoriesContainer, Wrapper } from "./styles";
import { UserContext } from "../../context/UserContext";

const Repositories = () => {
  // const [Repos, setRepos] = useState<any>([]);
  const { UserData, setRepositories, repositories } = useContext(UserContext);
  useEffect(() => {
    // if (repositories.length === 0) {
    //   FetchData();
    // }
    FetchData();
    return () => {
      setRepositories([]);
    };
  }, [UserData]);
  const requests: any = [];
  const repositorios: any = [];
  const FetchData = useCallback(async () => {
    try {
      const result = await fetch(
        `https://api.github.com/users/${UserData.login}/repos?&per_page=10&page=1&sort=pushed`,
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
      // console.log(
      //   result.headers
      //     .get("link")
      //     ?.split(",")
      //     .map((i) => i.split(";"))
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
      setRepositories(() => {
        return RESPONSE;
      });
      console.log(RESPONSE);
      // console.log(repositoriesFetch);
      // console.log(await RESPONSE);

      // Promise.all();

      // ---------------------------------------------------------------------------------------------------
      // data.map((repo: any) => {
      //   requests.push({
      //     urlCommits: `https://api.github.com/repos/${UserData.login}/${repo.name}/commits`,
      //     ...repo,
      //   });
      //   // fetch(
      //   //   `https://api.github.com/repos/${UserData.login}/${repo.name}/commits`,
      //   //   {
      //   //     method: "GET",
      //   //     headers: {
      //   //       Authorization: "Bearer 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",
      //   //     },
      //   //   }
      //   // )
      //   //   .then((result) => result.json())
      //   //   .then((json) => console.log(json));
      //   // console.log(result2.json(), "RESULT");s
      //   // requests.push(result2.json());
      //   // console.log(requests);
      //   // Promise.all(requests).then((data2) => {
      //   // console.log(data2);
      //   // setRepositories((prev: any) => {
      //   //   return [...prev, { ...repo, commits: data2.length }];
      //   // });
      //   // });
      // });
      // console.log(requests);
      // Promise.all(
      //   requests.map((item: any) => {
      //     return fetch(item.urlCommits, {
      //       method: "GET",
      //       headers: {
      //         Authorization:
      //           "Bearer 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",
      //       },
      //     }).then((response) => response.json());
      //   })
      // ).then((commit) => {
      //   data.forEach((repo: any, index: number) => {
      //     repositorios.push({ ...repo, commits: commit[index].length });
      //   });
      //   console.log(repositorios);
      //   // let commits = data.map((item: any) => {
      //   //   return item;
      //   // });
      //   // console.log(commits);
      //   setRepositories(() => {
      //     return [...repositorios];
      //   });
      // });
      // ---------------------------------------------------------------------------------------------------
    } catch (error) {
      // setError(true);
      // navigate("/404");
    }
  }, []);

  return (
    <>
      <Filter />
      <Wrapper>
        <RepositoriesContainer>
          <CardRepository />

          {/* <CardRepository />
          <CardRepository />
          <CardRepository /> */}
        </RepositoriesContainer>
      </Wrapper>
    </>
  );
};

export default memo(Repositories);
