import { Star } from "phosphor-react";
import { CardFavoritesContainer } from "./styles";

export const CardFavorites = () => {
  return (
    <CardFavoritesContainer>
      <div className="heading">
        <div className="nameRepository">
          <h2>HomeYou</h2>
          <span>JavaScript</span>
        </div>
        <Star size={20} />
      </div>
      <div className="footer">
        <span>3 Meses atrás</span>
        <div className="profileUser">
          <img
            src="https://avatars.githubusercontent.com/u/89711908?v=4"
            alt=""
          />
          <p>Wallace-bezerra</p>
        </div>
      </div>
    </CardFavoritesContainer>
  );
};
