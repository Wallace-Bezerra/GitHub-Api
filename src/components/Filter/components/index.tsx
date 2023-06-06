import { ArrowDown, ArrowUp } from "phosphor-react";
import { Container } from "./styles";
import { useFetchDataRepositories } from "../../../hooks/useFetchDataRepositories";
import { UserContext } from "../../../context/UserContext";
import { useContext } from "react";

interface ModalFilterProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ModalFilter = ({ setIsOpen }: ModalFilterProps) => {
  const PathNamePage = window.location.pathname;
  // === "/user/repositories"
  const { setRepositories, setFavorites, favorites, repositories } =
    useContext(UserContext);
  const { setPage, setOrder, order } = useFetchDataRepositories();
  const orderDesc = () => {
    if (order !== "desc") {
      setPage(() => 1);
      setRepositories([]);
      setOrder("desc");
    }
    setIsOpen((prev) => !prev);
  };
  const OrderAsc = () => {
    if (order !== "asc") {
      setPage(() => 1);
      setRepositories([]);
      setOrder("asc");
    }
    setIsOpen((prev) => !prev);
  };

  const modalAnimate = {
    close: { opacity: 0, y: -10 },
    open: { opacity: 1, y: 0 },
  };
  return (
    <Container
      variants={modalAnimate}
      initial={"close"}
      animate={"open"}
      exit={"close"}
      transition={{ type: "spring" }}
    >
      <li
        onClick={
          PathNamePage === "/user/repositories"
            ? orderDesc
            : () => {
                const Recent = favorites.sort((a, b) => {
                  if (a.pushed_at > b.pushed_at) {
                    return -1;
                  }
                  return 0;
                });
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
                const Recent = favorites.sort((a, b) => {
                  if (a.pushed_at < b.pushed_at) {
                    return -1;
                  }
                  return 0;
                });
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
