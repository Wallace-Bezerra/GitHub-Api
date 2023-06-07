import { useContext } from "react";
import gitBagImage from "../../assets/git-bag.png";
import { CardContainer, CardUser, GridUser, ProfileUser } from "./styles";
import { UserContext } from "../../context/UserContext";
import { Languages } from "../../components/Languages";

export const User = () => {
  const { UserData } = useContext(UserContext);
  const container = {
    onInitial: { opacity: 0 },
    offAnimation: {
      opacity: 1,
      duration: 0.4,
    },
  };
  return (
    <GridUser
      variants={container}
      initial={"onInitial"}
      animate={"offAnimation"}
      exit={"onInitial"}
    >
      <CardUser>
        <div className="infoUser">
          <div className="heading">
            <h2>{UserData.name} -</h2>
            <span>{UserData.location}</span>
          </div>
          <a href={UserData.html_url} target="_blank">
            {UserData.login}
          </a>
        </div>
        <div className="followContainer">
          <div className="following">
            <p>{UserData.following}</p>
            <span>Seguindo</span>
          </div>
          <div className="followers">
            <p>{UserData.followers}</p>
            <span>Seguidores</span>
          </div>
        </div>
      </CardUser>

      <CardContainer className="repository">
        <h2>Repositórios Públicos</h2>
        <div className="publicRepos">
          <img src={gitBagImage} alt="git bag" />
          <div className="valueRepo">
            <div className="repos">
              <span>{UserData.public_repos}</span>
            </div>
            <div className="sombra"></div>
          </div>
        </div>
      </CardContainer>

      <ProfileUser>
        <div className="heading">
          <h2>Perfil</h2>
          <div className="created">
            <p>Membro desde</p>
            <span>
              {new Date(UserData.created_at).toLocaleDateString("pt-br", {
                month: "long",
                year: "numeric",
              })}
            </span>
          </div>
        </div>
        <div className="infoUser">
          <p className="bio">{UserData.bio}</p>
          <div className="others">
            <p>{UserData.company}</p>
            <a href={UserData.blog} target="_blank">
              {UserData.blog}
            </a>
          </div>
        </div>
      </ProfileUser>

      <Languages />
    </GridUser>
  );
};
