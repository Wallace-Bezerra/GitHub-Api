import { NotFoundContainer } from "./styles";
import boxSvg from "../../assets/box.svg";
import { Link } from "react-router-dom";
export const NotFound = () => {
  return (
    <NotFoundContainer initial={{opacity:0, x:-100}} animate={{opacity:1,x:0}}>
      <div className="info">
        <h2>404</h2>
        <p>Página não encontrada...</p>
        <Link to={"/"}>Voltar</Link>
      </div>
      <img src={boxSvg} alt="" />
    </NotFoundContainer>
  );
};
