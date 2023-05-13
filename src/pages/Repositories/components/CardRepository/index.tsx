import { Flag, Star } from "phosphor-react/dist";
import { CardContainer, Favorites } from "./styles";
import { memo, useContext, useMemo, useState } from "react";
import { FavoritesI, UserContext } from "../../../../context/UserContext";
import { Loading } from "../../../../components/Loading";

interface CardRepositoryProps {
  isLoading: boolean;
}
interface languagesRepositoryProps {
  language: string;
  value: number;
}
const CardRepository = ({ isLoading }: CardRepositoryProps) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const { UserData, repositories, setRepositories, setFavorites, favorites } =
    useContext(UserContext);

  return (
    <>
      {repositories?.map((repo, index) => {
        {
          console.log("RENDERIZOU O CARD REPOSITORIO", index);
        }
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
                onClick={() => {
                  let Duplicate = favorites.filter((item) => {
                    return item.id === repo.id;
                  });
                  if (Duplicate.length > 0) {
                    console.log("Já existe");
                    const filtredRepositories = repositories.map((repoItem) => {
                      if (repoItem.id === repo.id) {
                        console.log("YESS igual");
                        console.log(repoItem.id, repo.id);
                        return {
                          ...repoItem,
                          isFavorite: !repoItem.isFavorite,
                        };
                      }
                      return repoItem;
                    });
                    const FilterFavorites = favorites.filter((item) => {
                      return item.id !== repo.id;
                    });
                    setFavorites(FilterFavorites);
                    setRepositories(() => filtredRepositories);
                    return;
                  }
                  console.log(Duplicate);
                  setIsFavorite((prev) => !prev);
                  console.log(isFavorite, "apos prev");
                  const filtredRepositories = repositories.map((repoItem) => {
                    if (repoItem.id === repo.id) {
                      console.log("YESS igual");
                      console.log(repoItem.id, repo.id);
                      return {
                        ...repoItem,
                        isFavorite: !repoItem.isFavorite,
                      };
                    }
                    return repoItem;
                  });

                  setFavorites((prev) => {
                    const favorites = [
                      ...prev,
                      {
                        id: repo.id,
                        name: repo.name,
                        language: repo.language,
                        html_url: repo.html_url,
                        pushed_at: repo.pushed_at,
                        pushed_now: new Date().toISOString(),
                        isFavorite: filtredRepositories[index]!.isFavorite,
                        login: UserData.login,
                        avatar_url: UserData.avatar_url,
                      },
                    ];
                    return favorites;
                  });
                  setRepositories(() => filtredRepositories);
                }}
                isFavorite={repo.isFavorite}
              >
                <Star size={20} />
              </Favorites>
            </div>
            <div className="footer">
              <span>{new Date(repo.pushed_at).toLocaleDateString()}</span>
              <ul>{languagesRepositoryRender}</ul>
              <div className="commits">
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

export default memo(CardRepository);
