// import search from
import { MagnifyingGlass, ArrowUp } from "phosphor-react";
import { NotFindContainer } from "./styles";

export const NotFind = () => {
  return (
    <NotFindContainer>
      <MagnifyingGlass width={22} height={22} />
      <p>Não há mais repositórios</p>
      <button
        onClick={() => {
          document.querySelector("#top")!.scrollIntoView({
            behavior: "smooth",
            block: "center",
          });
        }}
      >
        <ArrowUp width={20} height={20} />
      </button>
    </NotFindContainer>
  );
};
