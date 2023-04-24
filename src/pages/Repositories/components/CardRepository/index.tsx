import { Star } from "phosphor-react/dist";
import { CardContainer } from "./styles";
import { useContext } from "react";
import { UserContext } from "../../../../context/UserContext";

export const CardRepository = () => {
  const { repositories } = useContext(UserContext);
  //   repositories?.map((repo: any) => {
  //     const GetCommits = async () => {
  //       const result = await fetch(
  //         `https://api.github.com/repos/${UserData.login}/${repo.name}/commits`,
  //         {
  //           method: "GET",
  //           headers: {
  //             Authorization: "Bearer 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",
  //           },
  //         }
  //       );
  //       const data = await result.json();

  //       setCommits((prev: any) => {
  //         return [...prev, data];
  //       });
  //       // console.log(data);
  //     };
  //     // GetCommits();
  //   });
  //   console.log("rerere");
  // }, []);
  //   const result = await fetch(
  //     `https://api.github.com/repos/${UserData.login}/${repoName}/commits`,
  //     {
  //       method: "GET",
  //       headers: {
  //         Authorization: "Bearer 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",
  //       },
  //     }
  //   );
  //   const data = await result.json();
  //   // console.log(data.length);
  //   CommitRef.current = data.length;
  //   console.log(CommitRef.current);
  // };
  // const Commits = repos?.map((repo: any) => {
  //   console.log(repo.name);
  //   fetch(
  //     `https://api.github.com/repos/${UserData.login}/${repo?.name}/commits`,
  //     {
  //       method: "GET",
  //       headers: {
  //         Authorization: "Bearer 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",
  //       },
  //     }
  //   )
  //     .then((res) => res.json())
  //     .then((json) => console.log(json));
  // });
  // const FetchData = async () => {
  //   try {
  //     const result = await fetch(
  //       `https://api.github.com/repos/${UserData.login}/${repos.name}&per_page=60&sort=pushed`,
  //       {
  //         method: "GET",
  //         headers: {
  //           Authorization: "Bearer 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",
  //         },
  //       }
  //     );
  //     const data = await result.json();
  //     if (result.status === 404) {
  //       throw new Error("Não existe");
  //     }
  //     // setUserData(data);
  //     console.log(data);
  //     setCommits(data.length);
  //   } catch (error) {
  //     // setError(true);
  //     // navigate("/404");
  //   }
  // };
  // console.log(repositories);
  // repos?.forEach((repo: any) => {
  //   resultsFetch.push(GetCommits(repo));
  // Repositorios.push({
  //   id: repo.id,
  //   name: repo.name,
  //   pushed_at: repo.pushed_at,
  //   language: repo.language,
  // });
  // console.log(resultsFetch);

  // setRepositories((prev: any) => {
  //   return [
  //     ...prev,
  //     {
  //       commits: result,
  //       id: repo.id,
  //       name: repo.name,
  //       pushed_at: repo.pushed_at,
  //       language: repo.language,
  //     },
  //   ];
  // });
  // });
  // Promise.all(resultsFetch).then((res) =>
  //   Repositorios.forEach(
  //     (element: any, index: any) => {
  //       element.teste = res[index].length;
  //     }
  //     // console.log(res[index].length);
  //   )
  // );

  // console.log(commits[0]?.length);
  return (
    <>
      {repositories?.map((repo: any) => {
        const LanguageRepo = Object.keys(repo.languages).map((item, index) => {
          return {
            language: item,
            value: Object.values(repo.languages)[index],
          };
        });
        return (
          <CardContainer key={repo.id}>
            <div className="heading">
              <div className="nameRepository">
                <a target="_blank" href={repo.html_url}>
                  {repo.name}
                </a>
                <span>{repo.language}</span>
              </div>
              <Star size={20} />
            </div>
            <div className="footer">
              <span>{new Date(repo.pushed_at).toLocaleDateString()}</span>
              <ul>
                {LanguageRepo.map((repoLanguage: any) => {
                  const valuePercentage =
                    (repoLanguage.value * 100) /
                    Object.values(repo.languages).reduce(
                      (acc: number, curr: any) => {
                        return acc + curr;
                      },
                      0
                    );
                  return (
                    <li key={`${repo.id}${repoLanguage.language}`}>
                      <p>{repoLanguage.language}</p>
                      <span>{valuePercentage.toFixed(1)}%</span>
                    </li>
                  );
                })}
              </ul>

              <div>
                <p>
                  {repo.commits.length === 30 ? "+30" : repo.commits.length}{" "}
                  Commits
                </p>
              </div>
            </div>
          </CardContainer>
        );
      })}
    </>
  );
};
