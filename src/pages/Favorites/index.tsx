import { House } from "phosphor-react";
import { MenuBar } from "../../components/Dashboard/styles";
import { Filter } from "../../components/Filter";
import { CardFavorites } from "./components/CardFavorites";
import { CardFavoritesContainer, FavoritesContainer } from "./styles";
import { NavLink } from "react-router-dom";
import { Wrapper } from "../Repositories/styles";

export const Favorites = () => {
  // useEffect(() => {}, []);
  // console.log(JSON.parse(localStorage.getItem("Git-api")!), "LocalStorage");
  return (
    <FavoritesContainer>
      <Filter />
      <MenuBar>
        <NavLink to="/">
          <House size={32} color="#ddd4d4" />
        </NavLink>
      </MenuBar>

      <Wrapper>
        <CardFavoritesContainer>
          <CardFavorites />
        </CardFavoritesContainer>
      </Wrapper>
    </FavoritesContainer>
  );
};
