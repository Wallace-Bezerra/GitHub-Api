import { NavLink, Outlet } from "react-router-dom";
import {
  BookBookmark,
  FolderSimpleStar,
  House,
  User,
} from "phosphor-react/dist";
import {
  ContentContainer,
  DashboardContainer,
  Links,
  MenuBar,
  Navbar,
} from "./styles";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

export const Dashboard = () => {
  useEffect(() => {
    FetchData();
  }, []);

  const { UserData, setUserData } = useContext(UserContext);
  const [error, setError] = useState<boolean>(false);
  const navigate = useNavigate();

  const FetchData = async () => {
    try {
      const result = await fetch(
        `https://api.github.com/users/${UserData.login}`,
        {
          method: "GET",
          headers: {
            Authorization:
              "Bearer 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",
          },
        }
      );
      const data = await result.json();
      if (result.status === 404) {
        throw new Error("Não existe");
      }
      setUserData(data);
    } catch (error) {
      setError(true);
      // navigate("/404");
    }
  };
  // console.log(UserData, "TESTE");
  return (
    <DashboardContainer>
      {!error && (
        <>
          <Navbar>
            <img src={UserData.avatar_url} alt="" />
            <Links>
              <NavLink to=" ">
                <User size={20} color="#ddd4d4" />
              </NavLink>
              <NavLink to="repositories">
                <BookBookmark size={20} color="#ddd4d4" />
              </NavLink>
            </Links>
          </Navbar>

          <ContentContainer>
            <MenuBar>
              <NavLink to="/favorites">
                <FolderSimpleStar size={32} color="#ddd4d4" />
              </NavLink>
              <NavLink to="/">
                <House size={32} color="#ddd4d4" />
              </NavLink>
            </MenuBar>
            <Outlet></Outlet>
          </ContentContainer>
        </>
      )}
      {error && (
        <div>
          <NavLink to="/">
            <House size={32} color="#ddd4d4" />
          </NavLink>
          <h2>Usuário não existe!</h2>
        </div>
      )}
    </DashboardContainer>
  );
};
