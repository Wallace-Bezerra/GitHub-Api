import { Star } from "phosphor-react/dist";
import { CardContainer } from "./styles";
import {
  useContext,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { UserContext } from "../../../../context/UserContext";
// interface CardRepositoryProps{
//   repos:
// }
let repositories: any = [];
export const CardRepository = ({ repos }: any) => {
  const { UserData } = useContext(UserContext);
  const [repositories, setRepositories] = useState<any>([]);
  // const RepoRef = useRef<any>([]);
  const Repositorios: any = [];
  const GetCommits = async (repo: any) => {
    const result = await fetch(
      `https://api.github.com/repos/${UserData.login}/${repo.name}/commits`,
      {
        method: "GET",
        headers: {
          Authorization: "Bearer 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",
        },
      }
    );

    return await result.json();
  };
  const resultsFetch: any = [];
  useEffect(() => {}, []);
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
  repos?.forEach((repo: any) => {
    resultsFetch.push(GetCommits(repo));
    Repositorios.push({
      id: repo.id,
      name: repo.name,
      pushed_at: repo.pushed_at,
      language: repo.language,
    });
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
  });
  Promise.all(resultsFetch).then((res) =>
    Repositorios.forEach(
      (element: any, index: any) => {
        element.teste = res[index].length;
      }
      // console.log(res[index].length);
    )
  );
  console.log(Repositorios[0].teste);
  // console.log(Repositorios[0].teste);
  return (
    <>
      {Repositorios.map((repo: any) => {
        return (
          <CardContainer key={repo.id}>
            <div className="heading">
              <div className="nameRepository">
                <h2>{repo.name}</h2>
                <span>{repo.language}</span>
              </div>
              <Star size={20} />
            </div>
            <div className="footer">
              <span>{new Date(repo.pushed_at).toLocaleDateString()}</span>
              <ul>
                <li>
                  <p>JS</p>
                  <span>80%</span>
                </li>
                <li>
                  <p>CSS</p>
                  <span>20%</span>
                </li>
              </ul>
              <div>
                <p> Commits</p>
                {Repositorios[0].teste}
              </div>
            </div>
          </CardContainer>
        );
      })}
    </>
  );
};
