import { Star } from "phosphor-react";
import { CardFavoritesContainer } from "./styles";
import { useContext } from "react";
import { UserContext } from "../../../../context/UserContext";
import { Favorites } from "../../../Repositories/components/CardRepository/styles";

export const CardFavorites = () => {
  const { favorites, setFavorites } = useContext(UserContext);
  return (
    <>
      {console.log(favorites)}
      {favorites?.map((favorite) => {
        return (
          <CardFavoritesContainer key={favorite.id}>
            <div className="heading">
              <div className="nameRepository">
                <a href={favorite.html_url} target="_blank">
                  {favorite.name}
                </a>
                <span>{favorite.language}</span>
              </div>
              <Favorites isFavorite={favorite.isFavorite}>
                <Star size={20} />
              </Favorites>
            </div>
            <div className="footer">
              <span>{new Date(favorite.pushed_at).toLocaleDateString()}</span>
              <a
                href={`https://github.com/${favorite.login}`}
                target="_blank"
                className="profileUser"
              >
                <img src={favorite.avatar_url} alt="image profile" />
                <p>{favorite.login}</p>
              </a>
            </div>
          </CardFavoritesContainer>
        );
      })}
    </>
  );
};
