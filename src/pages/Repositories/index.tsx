import { useCallback, useContext, useEffect, memo } from "react";
import { Filter } from "../../components/Filter";
import { CardRepository } from "./components/CardRepository";
import { RepositoriesContainer, Wrapper } from "./styles";
import { UserContext } from "../../context/UserContext";

const Repositories = () => {
  // const [Repos, setRepos] = useState<any>([]);
  const { UserData, setRepositories } = useContext(UserContext);
  useEffect(() => {
    FetchData();
    return () => {
      setRepositories([]);
    };
  }, []);
  const requests: any = [];
  const repositorios: any = [];
  const FetchData = useCallback(async () => {
    try {
      const result = await fetch(
        `https://api.github.com/users/${UserData.login}/repos?&per_page=10&page=1&sort=pushed`,
        {
          method: "GET",
          headers: {
            Authorization: "Bearer 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",
          },
        }
      );
      if (result.status === 404) {
        throw new Error("Não existe");
      }
      const data = await result.json();
      console.log("repos", data);

      // console.log(data);
      data.map((repo: any) => {
        requests.push({
          urlCommits: `https://api.github.com/repos/${UserData.login}/${repo.name}/commits`,
          ...repo,
        });
        // fetch(
        //   `https://api.github.com/repos/${UserData.login}/${repo.name}/commits`,
        //   {
        //     method: "GET",
        //     headers: {
        //       Authorization: "Bearer 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",
        //     },
        //   }
        // )
        //   .then((result) => result.json())
        //   .then((json) => console.log(json));
        // console.log(result2.json(), "RESULT");s
        // requests.push(result2.json());
        // console.log(requests);
        // Promise.all(requests).then((data2) => {
        // console.log(data2);
        // setRepositories((prev: any) => {
        //   return [...prev, { ...repo, commits: data2.length }];
        // });
        // });
      });
      console.log(requests);
      Promise.all(
        requests.map((item: any) => {
          return fetch(item.urlCommits, {
            method: "GET",
            headers: {
              Authorization: "Bearer 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",
            },
          }).then((response) => response.json());
        })
      ).then((commit) => {
        data.forEach((repo: any, index: number) => {
          repositorios.push({ ...repo, commits: commit[index].length });
        });
        console.log(repositorios);
        // let commits = data.map((item: any) => {
        //   return item;
        // });
        // console.log(commits);
        setRepositories(() => {
          return [...repositorios];
        });
      });

      // console.log(requests);

      // setUserData(data);
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
