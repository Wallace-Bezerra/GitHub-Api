import { Dispatch, ReactNode, SetStateAction } from "react";

export interface UserContextProviderProps {
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
export interface UserContextProps {
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
