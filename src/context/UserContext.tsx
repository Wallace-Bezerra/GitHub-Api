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
  setRepositories: Dispatch<any>;
  repositories: any;
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

export const UserContextProvider = ({ children }: UserContextProviderProps) => {
  const [UserData, setUserData] = useState<User>({} as User);
  const [repositories, setRepositories] = useState<any>([]);
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
