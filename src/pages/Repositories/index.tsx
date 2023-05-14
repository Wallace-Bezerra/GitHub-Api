import { memo } from "react";
import { Filter } from "../../components/Filter";
import CardRepository from "./components/CardRepository";
import { RepositoriesContainer, Wrapper } from "./styles";
const Repositories = () => {
  return (
    <>
      <Filter />
      <Wrapper>
        <RepositoriesContainer>
          <CardRepository />

          <div className="last visible" style={{ height: "2px" }}></div>
        </RepositoriesContainer>
      </Wrapper>
    </>
  );
};

export default memo(Repositories);
