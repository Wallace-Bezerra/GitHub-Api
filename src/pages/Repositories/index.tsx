import { memo } from "react";
import { Filter } from "../../components/Filter";
import CardRepository from "./components/CardRepository";
import { RepositoriesContainer, Wrapper } from "./styles";

const Repositories = () => {
  const container = {
    onInitial: { x: -100, opacity: 0 },
    offAnimation: {
      x: 0,
      opacity: 1,
      duration: 1.2,
    },
  };
  return (
    <>
      <Filter />

      <Wrapper>
        <RepositoriesContainer
          variants={container}
          initial={"onInitial"}
          animate={"offAnimation"}
          transition={{
            when: "beforeChildren",
            staggerChildren: 0.2,
            type: "just",
          }}
        >
          <CardRepository />
        </RepositoriesContainer>
      </Wrapper>
    </>
  );
};

export default memo(Repositories);
