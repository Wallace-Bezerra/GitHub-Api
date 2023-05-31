import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from "react";
interface UserContextProps {
  UserData: UserI;
  setUserData: Dispatch<SetStateAction<UserI>>;
  setRepositories: Dispatch<SetStateAction<RepositoriesI[]>>;
  repositories: RepositoriesI[];
  order: string;
  setOrder: Dispatch<SetStateAction<string>>;
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
  setFavorites: Dispatch<SetStateAction<FavoritesI[]>>;
  favorites: FavoritesI[];
}
export const UserContext = createContext({} as UserContextProps);

interface UserContextProviderProps {
  children: ReactNode;
}
export interface UserI {
  avatar_url: string;
  name: string;
  login?: string;
  bio: string;
  followers: number;
  following: number;
  location: string;
  html_url: string;
  company: string;
  blog: string;
  public_repos: number;
  created_at: string;
}
export interface RepositoriesI {
  // create inteface
  id: number;
  name: string;
  language: string;
  languages: object;
  commits: number;
  html_url: string;
  pushed_at: string;
  isFavorite?: boolean;
}

export interface FavoritesI {
  id: number;
  name: string;
  language: string;
  html_url: string;
  pushed_at: string;
  pushed_now: string;
  isFavorite?: boolean;
  login?: string;
  avatar_url: string;
}
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
