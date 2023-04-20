import { Star } from "phosphor-react/dist";
import { CardContainer } from "./styles";

export const CardRepository = () => {
  return (
    <CardContainer>
      <div className="heading">
        <div className="nameRepository">
          <h2>HomeYou</h2>
          <span>JavaScript</span>
        </div>
        <Star size={20} />
      </div>
      <div className="footer">
        <span>3 Meses atrás</span>
        <ul>
          <li>
            <p>JS</p>
            <span>80%</span>
          </li>
          <li>
            <p>CSS</p>
            <span>20%</span>
          </li>
        </ul>
        <div>
          <p>82 Commits</p>
        </div>
      </div>
    </CardContainer>
  );
};
