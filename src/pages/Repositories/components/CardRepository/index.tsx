import { Star } from "phosphor-react/dist";
import { CardContainer, Favorites } from "./styles";
import { useContext, useState } from "react";
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
  const [isFavorite, setIsFavorite] = useState(false);
  const { repositories, setRepositories } = useContext(UserContext);
  return (
    <>
      {console.log(repositories)}
      {repositories?.map((repo, index) => {
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
                  {repo.name.replaceAll("_", "-")}
                </a>
                <span>{repo.language}</span>
              </div>
              <Favorites
                
                isFavorite={repo.isFavorite}
              >
                <Star size={20} />
              </Favorites>
            </div>
            <div className="footer">
              <span>{new Date(repo.pushed_at).toLocaleDateString()}</span>
              <ul>{languagesRepositoryRender}</ul>
              <div>
                <p>
                  {repo.commits === 30 ? "+30" : repo.commits}
                  {repo.commits === 1 ? " Commit" : " Commits"}
                </p>
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
