import { Star } from "phosphor-react/dist";
import commitIcon from "../../../../assets/commit.svg";
import { CardContainer, Favorites } from "./styles";
import { memo } from "react";
import { Loading } from "../../../../components/Loading";
import { NotFind } from "../../../../components/NotFind";
import { useRepositories } from "../../../../hooks/useRepositories";

const CardRepository = () => {
  const {
    handleFavorites,
    languagePercentage,
    repositories,
    isLoading,
    isNotFind,
  } = useRepositories();

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
  let indice: number = 0;

  return (
    <>
      <div id="top"></div>
      {repositories?.map((repo, index) => {
        if (indice >= 10) {
          indice = 1;
        } else {
          indice = ++indice;
        }
        const languagesRepositoryRender = languagePercentage(repo);
        return (
          <CardContainer variants={cardItem} custom={indice} key={repo.id}>
            <div className="heading">
              <div className="nameRepository">
                <a target="_blank" href={repo.html_url}>
                  {repo.name.replaceAll("_", "-")}
                </a>
                <span>{repo.language}</span>
              </div>
              <Favorites
                onClick={() => {
                  handleFavorites(repo, index);
                }}
                isFavorite={repo.isFavorite}
              >
                <Star size={20} />
              </Favorites>
            </div>
            <div className="footer">
              <span>{new Date(repo.pushed_at).toLocaleDateString()}</span>
              <ul>
                {languagesRepositoryRender?.map((language) => {
                  return (
                    <li key={`${repo.id}${language.language}`}>
                      <p>{language.language}</p>
                      <span>{language.value.toFixed(1)}%</span>
                    </li>
                  );
                })}
              </ul>
              <div className="commits">
                <p>
                  {repo.commits === 30 ? "+30" : repo.commits}
                  {repo.commits === 1 ? " Commit" : " Commits"}
                </p>
                <img src={commitIcon} width={10} alt="commit icon" />
              </div>
            </div>
          </CardContainer>
        );
      })}
      {isLoading && <Loading width={90} />}
      {isNotFind && <NotFind />}
      <div className="last"></div>
    </>
  );
};

export default memo(CardRepository);
