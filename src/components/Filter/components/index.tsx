import { ArrowDown, ArrowUp } from "phosphor-react";
import { Container } from "./styles";
import { useFetchData } from "../../../hooks/useFetchData";
import { UserContext } from "../../../context/UserContext";
import { useContext } from "react";

interface ModalFilterProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ModalFilter = ({ setIsOpen }: ModalFilterProps) => {
  const { setRepositories } = useContext(UserContext);
  const { setPage, setOrder } = useFetchData();
  return (
    <Container>
      <li
        onClick={() => {
          setPage(0);
          setRepositories([]);
          setOrder("desc");
          setIsOpen((prev) => !prev);
        }}
      >
        <ArrowUp />
        Recente
      </li>
      <li
        onClick={() => {
          setPage(0);
          setRepositories([]);
          setOrder("asc");
          setIsOpen((prev) => !prev);
        }}
      >
        <ArrowDown />
        Antigo
      </li>
    </Container>
  );
};
