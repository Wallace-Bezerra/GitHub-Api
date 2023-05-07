import { Star } from "phosphor-react/dist";
import { CardContainer } from "./styles";
import { useContext } from "react";
import { UserContext } from "../../../../context/UserContext";
import { Loading } from "../../../../components/Loading";
interface CardRepositoryProps {
  elementLast: React.MutableRefObject<HTMLDivElement | null>;
  isLoading: boolean;
}
export const CardRepository = ({
  elementLast,
  isLoading,
}: CardRepositoryProps) => {
  const { repositories } = useContext(UserContext);
  return (
    <>
      {console.log(repositories)}
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
      {isLoading && <Loading width={90} />}
      <div ref={elementLast} className="last"></div>
    </>
  );
};
