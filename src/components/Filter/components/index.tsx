import { ArrowDown, ArrowUp } from "phosphor-react";
import { Container } from "./styles";
import { useFetchData } from "../../../hooks/useFetchData";
import { UserContext } from "../../../context/UserContext";
import { useContext } from "react";

interface ModalFilterProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ModalFilter = ({ setIsOpen }: ModalFilterProps) => {
  const PathNamePage = window.location.pathname;
  // === "/user/repositories"
  const { setRepositories, setFavorites, favorites } = useContext(UserContext);
  const { setPage, setOrder } = useFetchData();
  const orderDesc = () => {
    setPage(0);
    setRepositories([]);
    setOrder("desc");
    setIsOpen((prev) => !prev);
  };
  const OrderAsc = () => {
    setPage(0);
    setRepositories([]);
    setOrder("asc");
    setIsOpen((prev) => !prev);
  };
  return (
    <Container>
      <li
        onClick={
          PathNamePage === "/user/repositories"
            ? orderDesc
            : () => {
                console.log("estou em favorite");
                const Recent = favorites.sort((a, b) => {
                  if (a.pushed_at > b.pushed_at) {
                    return -1;
                  }
                  // console.log(new Date(a.pushed_at).getDate());
                  return 0;
                });
                console.log(Recent);
                setFavorites([...Recent]);
                setIsOpen((prev) => !prev);
              }
        }
      >
        <ArrowUp />
        Recente
      </li>
      <li
        onClick={
          PathNamePage === "/user/repositories"
            ? OrderAsc
            : () => {
                console.log("estou no favorito");
                const Recent = favorites.sort((a, b) => {
                  if (a.pushed_at < b.pushed_at) {
                    return -1;
                  }
                  // console.log(new Date(a.pushed_at).getDate());
                  return 0;
                });
                console.log(Recent);
                setFavorites([...Recent]);
                setIsOpen((prev) => !prev);
              }
        }
      >
        <ArrowDown />
        Antigo
      </li>
    </Container>
  );
};
