import { useState, useRef, useContext, useEffect } from "react";
import { RepositoriesI } from "../context/Types";
import { UserContext } from "../context/UserContext";
import { useFetchDataRepositories } from "./useFetchDataRepositories";

interface languagesRepositoryProps {
  language: string;
  value: number;
}
export const useRepositories = () => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isNotFind, setIsNotFind] = useState(false);
  const elementLast = useRef<HTMLDivElement | null>(null);
  const [isView, setIsView] = useState(false);

  const { UserData, repositories, setRepositories, setFavorites, favorites } =
    useContext(UserContext);
  const { FetchDataRepositories, isLoading, lastPage, page, setPage, order } =
    useFetchDataRepositories();

  let observer: IntersectionObserver;
  useEffect(() => {
    if (page <= lastPage.current) {
      FetchDataRepositories();
    }
    if (page !== 1 && page === lastPage.current) {
      setTimeout(() => {
        setIsNotFind(() => true);
      }, 1000);
    }
    setIsNotFind(false);
    return () => {
      if (page >= 1 && window.location.pathname === "/user/repositories") {
        return;
      }
      setRepositories([]);
      setPage(1);
      setIsNotFind(false);
    };
  }, [UserData, page, order]);

  useEffect(() => {
    let options = {
      rootMargin: "-20px",
      threshold: 1.0,
    };

    observer = new IntersectionObserver((entries) => {
      setIsView(Boolean(entries[0].intersectionRatio));
    }, options);
    elementLast.current = document.querySelector<HTMLDivElement>(".last");
    observer.observe(elementLast.current!);
    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (isView) {
      if (page < lastPage.current && !isLoading) {
        setPage((prev) => prev + 1);
      }
    }
  }, [isView]);

  const handleFavorites = (repo: RepositoriesI, index: number) => {
    let duplicateFavorites = favorites.filter((item) => {
      return item.id === repo.id;
    });
    if (duplicateFavorites.length > 0) {
      const filtredRepositories = repositories.map((repoItem) => {
        if (repoItem.id === repo.id) {
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
    setIsFavorite((prev) => !prev);
    const filtredRepositories = repositories.map((repoItem) => {
      if (repoItem.id === repo.id) {
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
  };

  const languagePercentage = (repo: RepositoriesI) => {
    let languagesRepository: languagesRepositoryProps[];
    if (repo.languages) {
      languagesRepository = Object.keys(repo.languages).map((item, index) => {
        return {
          language: item,
          value: Object.values(repo.languages)[index],
        };
      });
      const languagesRepositoryPercentage = languagesRepository.map(
        (repoLanguage) => {
          const valuePercentage =
            (repoLanguage.value * 100) /
            Object.values(repo.languages).reduce(
              (acc: number, curr: number) => {
                return acc + curr;
              },
              0
            );
          return { ...repoLanguage, value: valuePercentage };
        }
      );

      return languagesRepositoryPercentage;
    }
  };
  return {
    handleFavorites,
    languagePercentage,
    repositories,
    isLoading,
    isNotFind,
  };
};
