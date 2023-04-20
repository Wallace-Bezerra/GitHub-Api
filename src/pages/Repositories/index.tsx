import { Filter } from "../../components/Filter";
import { CardRepository } from "./components/CardRepository";
import { RepositoriesContainer, Wrapper } from "./styles";

export const Repositories = () => {
  return (
    <>
      <Filter />
      <Wrapper>
        <RepositoriesContainer>
          <CardRepository />
          <CardRepository />
          <CardRepository />
          <CardRepository />
        </RepositoriesContainer>
      </Wrapper>
    </>
  );
};
