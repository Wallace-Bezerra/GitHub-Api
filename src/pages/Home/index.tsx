import github from "../../assets/github.png";
import { MagnifyingGlass, FolderSimpleStar } from "phosphor-react/dist";
import { HomeContainer } from "./styles";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useRef } from "react";
import { UserContext } from "../../context/UserContext";

export const Home = () => {
  const navigate = useNavigate();
  const { setUserData, UserData } = useContext(UserContext);
  const UserRef = useRef<HTMLInputElement>(null);
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
        <form
          onSubmit={() => {
            navigate("/user/");
            // console.log(UserRef.current?.value);
            setUserData({ ...UserData, login: UserRef.current?.value });
          }}
        >
          <input type="text" ref={UserRef} required list="suggestion" />
          <datalist id="suggestion">
            <option>Wallace-Bezerra</option>
            <option>zenorocha</option>
          </datalist>
          <button type="submit">
            <MagnifyingGlass size={24} weight="bold" />
          </button>
        </form>
      </div>
      <div className="imageGithub">
        <img src={github} alt="github" />
      </div>
    </HomeContainer>
  );
};
