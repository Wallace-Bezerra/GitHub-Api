import github from "../../assets/github.png";
import { MagnifyingGlass, FolderSimpleStar } from "phosphor-react/dist";
import { HomeContainer } from "./styles";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useRef } from "react";
import { UserContext } from "../../context/UserContext";
import { motion } from "framer-motion";

export const Home = () => {
  const navigate = useNavigate();
  const { setUserData, UserData } = useContext(UserContext);
  const UserRef = useRef<HTMLInputElement>(null);

  const container = {
    onInitial: { x: -100, opacity: 0 },
    offAnimation: {
      x: 0,
      opacity: 1,
      duration: 1.2,
    },
  };
  const form = {
    onInitial: { x: -100, opacity: 0 },
    offAnimation: { x: 0, opacity: 1 },
  };
  return (
    <HomeContainer>
      <Link to={"/favorites"} className="favorites">
        <FolderSimpleStar size={32} color="#ddd4d4" />
      </Link>
      <motion.div
        variants={container}
        initial={"onInitial"}
        animate={"offAnimation"}
        transition={{
          when: "beforeChildren",
          staggerChildren: 2,
          type: "just",
        }}
        className="InputContainer"
      >
        <h1>
          Digite um usuário do
          <span> GitHub</span>
        </h1>
        <motion.form
          variants={form}
          onSubmit={() => {
            navigate("/user/");
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
        </motion.form>
      </motion.div>
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{
          duration: 0.5,
          bounce: 1,
        }}
        className="imageGithub"
      >
        <img src={github} alt="github" />
      </motion.div>
    </HomeContainer>
  );
};
