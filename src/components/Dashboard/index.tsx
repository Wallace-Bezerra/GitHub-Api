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
import { UserI, UserContext } from "../../context/UserContext";
import { ModalUser } from "../ModalUser";

export const Dashboard = () => {
  useEffect(() => {
    FetchData();
  }, []);
  console.log(import.meta.env.VITE_SOME_KEY);
  const { UserData, setUserData } = useContext(UserContext);
  const [error, setError] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const FetchData = async () => {
    try {
      const result = await fetch(
        `https://api.github.com/users/${UserData.login}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_SOME_KEY} `,
          },
        }
      );
      const data: UserI = await result.json();
      console.log(data);
      if (result.status === 404) {
        throw new Error("Não existe");
      }
      setUserData(data);
    } catch (error) {
      setError(true);
      // navigate("/404");
    }
  };
  return (
    <DashboardContainer>
      {isOpen && (
        <ModalUser setIsOpen={setIsOpen} imageUser={UserData.avatar_url} />
      )}
      {!error && (
        <>
          <Navbar>
            <img
              src={UserData.avatar_url}
              alt="profile image"
              onClick={() => {
                setIsOpen((prev) => !prev);
              }}
            />
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
