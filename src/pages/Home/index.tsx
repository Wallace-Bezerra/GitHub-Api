import github from "../../assets/github.png";
import search from "../../assets/search.svg";
import { HomeContainer } from "./styles";

export const Home = () => {
  return (
    <HomeContainer>
      <div className="InputContainer">
        <h1>
          Digite um usuário do
          <span> GitHub</span>
        </h1>
        <form>
          <input type="text" />
          <button>
            <img src={search} alt="search" />
          </button>
        </form>
      </div>
      <img src={github} alt="github" />
    </HomeContainer>
  );
};
