import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";
interface UserContextProps {
  UserData: User;
  setUserData: Dispatch<SetStateAction<User>>;
  setRepositories: Dispatch<SetStateAction<RepositoriesI[]>>;
  repositories: RepositoriesI[];
}
export const UserContext = createContext({} as UserContextProps);

interface UserContextProviderProps {
  children: ReactNode;
}
interface User {
  avatar_url: string;
  name: string;
  login?: string;
  bio: string;
  followers: number;
  following: number;
  location: string;
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
}

export const UserContextProvider = ({ children }: UserContextProviderProps) => {
  const [UserData, setUserData] = useState<User>({} as User);
  const [repositories, setRepositories] = useState<RepositoriesI[]>([]);
  // console.log(UserData);
  return (
    <UserContext.Provider
      value={{
        UserData,
        setUserData,
        repositories,
        setRepositories,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
