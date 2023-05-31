import { Link } from "react-router-dom";
import { NotFindContainer } from "./styles";
import userNotFinder from "../../assets/userNotFind.png";
export const NotFindUser = () => {
  return (
    <NotFindContainer
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
    >
      <div className="info">
        <h2>Usuário não encontrado</h2>
        <p>Tente novamente</p>

        <Link to={"/"}>Voltar</Link>
      </div>
      <img src={userNotFinder} alt="" />
    </NotFindContainer>
  );
};
