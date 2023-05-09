import { Star } from "phosphor-react/dist";
import { CardContainer } from "./styles";
import { useContext } from "react";
import { UserContext } from "../../../../context/UserContext";
import { Loading } from "../../../../components/Loading";

interface CardRepositoryProps {
  isLoading: boolean;
}
interface languagesRepositoryProps {
  language: string;
  value: number;
}
export const CardRepository = ({ isLoading }: CardRepositoryProps) => {
  const { repositories } = useContext(UserContext);
  return (
    <>
      {console.log(repositories)}
      {repositories?.map((repo) => {
        let languagesRepository: languagesRepositoryProps[];
        let languagesRepositoryRender: React.ReactNode;
        if (repo.languages) {
          languagesRepository = Object.keys(repo.languages).map(
            (item, index) => {
              return {
                language: item,
                value: Object.values(repo.languages)[index],
              };
            }
          );
          languagesRepositoryRender = languagesRepository.map(
            (repoLanguage) => {
              const valuePercentage =
                (repoLanguage.value * 100) /
                Object.values(repo.languages).reduce(
                  (acc: number, curr: number) => {
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
            }
          );
        }
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
              <ul>{languagesRepositoryRender}</ul>
              <div>
                <p>{repo.commits === 30 ? "+30" : repo.commits} Commits</p>
              </div>
            </div>
          </CardContainer>
        );
      })}
      {isLoading && <Loading width={90} />}
      {/* {<Loading width={90} />} */}
    </>
  );
};
