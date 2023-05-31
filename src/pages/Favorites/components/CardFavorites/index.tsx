import { Star } from "phosphor-react";
import { CardFavoritesContainer } from "./styles";
import { useContext } from "react";
import { UserContext } from "../../../../context/UserContext";
import { Favorites } from "../../../Repositories/components/CardRepository/styles";

export const CardFavorites = () => {
  const { favorites, setFavorites } = useContext(UserContext);

  const cardItem = {
    onInitial: { x: -100, opacity: 0 },
    offAnimation: (i = 3) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: 0.2 * i,
      },
    }),
  };

  return (
    <>
      {console.log(favorites)}
      {favorites?.map((favorite, index) => {
        return (
          <CardFavoritesContainer
            layout
            transition={{duration:0.5, type: "keyframes"}}
            key={favorite.id}
            variants={cardItem}
            custom={index}
          >
            <div className="heading">
              <div className="nameRepository">
                <a href={favorite.html_url} target="_blank">
                  {favorite.name}
                </a>
                <span>{favorite.language}</span>
              </div>
              <Favorites isFavorite={favorite.isFavorite}
                onClick={() => { 
                  const filterRepositories = favorites.filter((item) => {
                    return item.id !== favorite.id
                  })
                  setFavorites(filterRepositories)
                 }}>
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
