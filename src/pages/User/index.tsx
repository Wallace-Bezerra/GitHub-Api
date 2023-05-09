import { useContext } from "react";
import {
  CardContainer,
  CardUser,
  GridUser,
  LinguagueUser,
  ProfileUser,
} from "./styles";
import { UserContext } from "../../context/UserContext";

export const User = () => {
  const { UserData } = useContext(UserContext);
  return (
    <GridUser>
      <CardUser>
        <div className="infoUser">
          <div className="heading">
            <h2>{UserData.name} -</h2>
            <span>{UserData.location}</span>
          </div>
          <p>{UserData.login}</p>
        </div>

        <div className="Followers">
          <p>{UserData.followers}</p>
          <span>Seguidores</span>
        </div>
      </CardUser>
      <CardContainer className="repository">
        <h2>
          Repositorios Públicos <span>{UserData.public_repos}</span>
        </h2>
      </CardContainer>

      <ProfileUser>
        <div className="heading">
          <h2>Profile</h2>
          <div className="created">
            <p>Desde</p>
            <span>
              {new Date(UserData.created_at).toLocaleDateString("pt-br", {
                month: "long",
                year: "numeric",
              })}
            </span>
          </div>
        </div>
        <p>{UserData.bio}</p>
      </ProfileUser>

      <LinguagueUser>
        <h2>Top Linguagens</h2>
        <ul className="languages">
          <li>
            <p>HTML </p>
            <span>70%</span>
          </li>
          <li>
            <p>CSS </p>
            <span>10%</span>
          </li>
          <li>
            <p>JS </p>
            <span>20%</span>
          </li>
        </ul>
      </LinguagueUser>
    </GridUser>
  );
};
