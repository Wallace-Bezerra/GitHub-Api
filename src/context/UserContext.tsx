import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
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

export const UserContextProvider = ({ children }: UserContextProviderProps) => {
  const [UserData, setUserData] = useState<UserI>({} as UserI);
  const [repositories, setRepositories] = useState<RepositoriesI[]>([]);
  const [order, setOrder] = useState("desc");
  const [page, setPage] = useState(1);
  // console.log(UserData);
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
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
