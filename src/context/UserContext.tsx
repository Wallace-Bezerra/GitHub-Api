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
  console.log(UserData);
  return (
    <UserContext.Provider
      value={{
        UserData,
        setUserData,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
