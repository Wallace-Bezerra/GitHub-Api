import { House } from "phosphor-react";
import gitIlustration from "../../assets/git-ilustration.png";
import { MenuBar } from "../../components/Dashboard/styles";
import { Filter } from "../../components/Filter";
import { CardFavorites } from "./components/CardFavorites";
import {
  CardFavoritesContainer,
  ContainerNotFavorites,
  FavoritesContainer,
} from "./styles";
import { Link, NavLink } from "react-router-dom";
import { Wrapper } from "../Repositories/styles";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

export const Favorites = () => {
  const { favorites } = useContext(UserContext);
  const container = {
    onInitial: { x: -100, opacity: 0 },
    offAnimation: {
      x: 0,
      opacity: 1,
      duration: 1.2,
    },
  };
  return (
    <FavoritesContainer favorites={favorites.length}>
      {!favorites.length && (
        <ContainerNotFavorites
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <div className="notFavoritesMessage">
            <h1>
              Você ainda não favoritou <span className="none">nenhum</span>{" "}
              <span className="repo">repositório</span>
            </h1>
            <Link to={"/"}>Buscar agora</Link>
          </div>
          <img src={gitIlustration} />
        </ContainerNotFavorites>
      )}
      {favorites.length > 0 && (
        <>
          <Filter />
          <MenuBar>
            <NavLink to="/">
              <House size={32} color="#ddd4d4" />
            </NavLink>
          </MenuBar>

          <Wrapper>
            <CardFavoritesContainer
              variants={container}
              initial={"onInitial"}
              animate={"offAnimation"}
              transition={{
                when: "beforeChildren",
                staggerChildren: 0.2,
                type: "just",
              }}
            >
              <CardFavorites />
            </CardFavoritesContainer>
          </Wrapper>
        </>
      )}
    </FavoritesContainer>
  );
};
