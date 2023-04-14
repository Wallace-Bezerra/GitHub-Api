import {
  CardContainer,
  CardUser,
  GridUser,
  LinguagueUser,
  ProfileUser,
} from "./styles";

export const User = () => {
  return (
    <GridUser>
      <CardUser>
        <div className="infoUser">
          <div className="heading">
            <h2>Wallace Bezerra</h2>
            <span>-</span>
            <span>São Paulo, SP</span>
          </div>
          <p>Wallace-Bezerra</p>
        </div>

        <div className="Followers">
          <p>71</p>
          <span>Seguidores</span>
        </div>
      </CardUser>
      <CardContainer className="repository">
        <h2>
          Repositorios <span>62</span>
        </h2>
      </CardContainer>

      <ProfileUser>
        <div className="heading">
          <h2>Profile</h2>
          <span>Desde 2021</span>
        </div>
        <p>
          Desenvolvedor Front End | JavaScript | React | Styled Components | Git
        </p>
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
