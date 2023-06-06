import { createContext, useEffect, useState } from "react";
import {
  UserContextProps,
  UserContextProviderProps,
  UserI,
  RepositoriesI,
  FavoritesI,
} from "./Types";

export const UserContext = createContext({} as UserContextProps);

export const UserContextProvider = ({ children }: UserContextProviderProps) => {
  const [UserData, setUserData] = useState<UserI>({} as UserI);
  const [repositories, setRepositories] = useState<RepositoriesI[]>([]);
  const [favorites, setFavorites] = useState<FavoritesI[]>(
    JSON.parse(localStorage.getItem("Git-api")!) || []
  );
  const [order, setOrder] = useState("desc");
  const [page, setPage] = useState(1);
  useEffect(() => {
    localStorage.setItem("Git-api", JSON.stringify(favorites));
  }, [favorites]);

  return (
    <UserContext.Provider
      value={{
        UserData,
        setUserData,
        repositories,
        setRepositories,
        order,
        setOrder,
        page,
        setPage,
        favorites,
        setFavorites,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

