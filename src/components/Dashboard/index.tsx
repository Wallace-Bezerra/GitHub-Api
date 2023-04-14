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

export const Dashboard = () => {
  return (
    <DashboardContainer>
      <Navbar>
        <img
          src="https://avatars.githubusercontent.com/u/89711908?v=4"
          alt=""
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
    </DashboardContainer>
  );
};
