import github from "../../assets/github.png";
import { MagnifyingGlass, FolderSimpleStar } from "phosphor-react/dist";
import { HomeContainer } from "./styles";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <HomeContainer>
      <Link to={"/favorites"} className="favorites">
        <FolderSimpleStar size={32} color="#ddd4d4" />
      </Link>
      <div className="InputContainer">
        <h1>
          Digite um usuário do
          <span> GitHub</span>
        </h1>
        <form>
          <input type="text" />
          <Link to="/user/">
            <MagnifyingGlass size={24} weight="bold" />
          </Link>
        </form>
      </div>
      <img src={github} alt="github" />
    </HomeContainer>
  );
};
