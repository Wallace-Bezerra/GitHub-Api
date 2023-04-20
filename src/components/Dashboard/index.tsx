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
import { UserContext } from "../../context/UserContext";

export const Dashboard = () => {
  useEffect(() => {
    FetchData();
  }, []);

  const { UserData, setUserData } = useContext(UserContext);

  const FetchData = async () => {
    const result = await fetch("https://api.github.com/users/Wallace-Bezerra", {
      method: "GET",
      headers: {
        Authorization: "Bearer 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",
      },
    });
    const data = await result.json();
    setUserData(data);
  };
  return (
    <DashboardContainer>
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
    </DashboardContainer>
  );
};
