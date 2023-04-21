import { useContext, useEffect, useState } from "react";
import { Filter } from "../../components/Filter";
import { CardRepository } from "./components/CardRepository";
import { RepositoriesContainer, Wrapper } from "./styles";
import { UserContext } from "../../context/UserContext";

export const Repositories = () => {
  const [Repos, setRepos] = useState(null);
  const { UserData } = useContext(UserContext);
  useEffect(() => {
    FetchData();
  }, []);
  const FetchData = async () => {
    try {
      const result = await fetch(
        `https://api.github.com/users/${UserData.login}/repos?&per_page=3&sort=pushed`,
        {
          method: "GET",
          headers: {
            Authorization: "Bearer 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",
          },
        }
      );
      const data = await result.json();
      if (result.status === 404) {
        throw new Error("Não existe");
      }
      // setUserData(data);
      setRepos(data);
    } catch (error) {
      // setError(true);
      // navigate("/404");
    }
  };
  // console.log(Repos);
  return (
    <>
      <Filter />
      <Wrapper>
        <RepositoriesContainer>
          <CardRepository repos={Repos} />
          {/* <CardRepository />
          <CardRepository />
          <CardRepository /> */}
        </RepositoriesContainer>
      </Wrapper>
    </>
  );
};
