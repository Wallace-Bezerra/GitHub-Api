import { Star } from "phosphor-react/dist";
import commitIcon from "/commit.svg";
import { CardContainer, Favorites } from "./styles";
import { memo, useContext, useEffect, useRef, useState } from "react";
import { UserContext } from "../../../../context/UserContext";
import { Loading } from "../../../../components/Loading";
import { useFetchData } from "../../../../hooks/useFetchData";
import { NotFind } from "../../../../components/NotFind";

interface languagesRepositoryProps {
  language: string;
  value: number;
}
const CardRepository = () => {
  const [isFavorite, setIsFavorite] = useState(false);
  const elementLast = useRef<HTMLDivElement | null>(null);
  const [isNotFind, setIsNotFind] = useState(false);
  const [isView, setIsView] = useState(false);
  const { UserData, repositories, setRepositories, setFavorites, favorites } =
    useContext(UserContext);
  const { FetchData, isLoading, lastPage, page, setPage, order } =
    useFetchData();

  // ----------------------------------------------------

  let observer: IntersectionObserver;
  useEffect(() => {
    // console.log(lastPage.current, "lastPage");
    // console.log("page", page);
    if (page <= lastPage.current) {
      FetchData();
    }
    //  else {
    //   console.log("Não há mais repositórios");
    //   setIsNotFind(() => true);
    // }
    if (page !== 1 && page === lastPage.current) {
      console.log(page, lastPage.current);
      console.log("Não há mais repositórios");
      setTimeout(() => {
        setIsNotFind(() => true);
      }, 1000);
    }
    return () => {
      if (page >= 1 && window.location.pathname === "/user/repositories") {
        return;
      }
      setRepositories([]);
      setPage(1);
      setIsNotFind(false);
    };
  }, [UserData, page, order]);
  console.log(order);
  console.log("Repositorios", repositories);

  useEffect(() => {
    let options = {
      rootMargin: "-20px",
      threshold: 1.0,
    };

    observer = new IntersectionObserver((entries) => {
      setIsView(Boolean(entries[0].intersectionRatio));
    }, options);
    console.log("element", elementLast.current);

    elementLast.current = document.querySelector<HTMLDivElement>(".last");
    observer.observe(elementLast.current!);
    return () => {
      console.log("desmonteiii");
      observer.disconnect();
    };
  }, [page]);

  useEffect(() => {
    if (isView) {
      if (page < lastPage.current) {
        setPage((prev) => prev + 1);
      }
    }
  }, [isView]);

  // ----------------------------------------------------------------------
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
                <img src={commitIcon} width={10} alt="commit icon" />
              </div>
            </div>
          </CardContainer>
        );
      })}
      {isLoading && <Loading width={90} />}
      {isNotFind && <NotFind />}
      {/* {<Loading width={90} />} */}
    </>
  );
};

export default memo(CardRepository);
