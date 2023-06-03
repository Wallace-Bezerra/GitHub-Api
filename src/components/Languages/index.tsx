import { useEffect } from "react";
import { useLanguages } from "../../hooks/useLanguages";
import { LanguagePercentage, LinguagueUser } from "./styles";
import { Loading } from "../Loading";
import { text } from "stream/consumers";

export const Languages = () => {
  const [languages, total] = useLanguages();
  console.log(languages);
  console.log(total);
  // console.log("Render");
  useEffect(() => {}, []);
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
    <LinguagueUser>
      <h2>Top Linguagens</h2>
      <ul className="languages">
        {!languages && (
          <>
            <Loading width={60} />
            <p style={{ textAlign: "center" }}>Varrendo repositórios...</p>
          </>
        )}

        {languages?.map(({ language, value }: any, key: any) => {
          const percentage = ((value * 100) / total).toFixed(2);
          return (
            <LanguagePercentage
              percentage={percentage}
              variants={cardItem}
              custom={key}
            >
              <div className="percentageCard">
                <p>{language}</p>
                <span className="bar"></span>
              </div>
              <span className="percentage">
                {percentage.replace(".00", "")} %
              </span>
            </LanguagePercentage>
          );
        })}
      </ul>
    </LinguagueUser>
  );
};
