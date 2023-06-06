import { motion } from "framer-motion";
import styled, { css } from "styled-components";

interface FavoritesContainerProps {
  favorites: number;
}
export const FavoritesContainer = styled.div<FavoritesContainerProps>`
  position: relative;
  padding-top: ${({ favorites }) => (favorites > 0 ? "7em" : "0")};
  ${({ favorites }) => {
    return !favorites
      ? css`
          display: flex;
          align-items: center;
        `
      : null;
  }}

  padding-inline: 20px;
  width: 100rem;
  height: 60rem;
  background: linear-gradient(
    105.66deg,
    #101724 18.56%,
    rgba(23, 32, 49, 0.67) 91.68%
  );
  border-radius: 5.675px;
  @media (max-width: 1100px) {
    min-height: 100vh;
  }
  @media (max-width: 600px) {
    .footer {
      a {
        justify-self: flex-end;
      }
    }
  }
`;

export const CardFavoritesContainer = styled(motion.div)`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 3rem;
  padding-bottom: 4rem;
  @media (max-width: 860px) {
    padding-right: 2rem;
  }
`;
export const ContainerNotFavorites = styled(motion.div)`
  display: flex;
  max-width: 630px;
  width: 100%;
  margin: 0 auto;
  .notFavoritesMessage {
    display: flex;
    flex-direction: column;
    h1 {
      margin-bottom: 30px;
      .none {
        color: #f78045;
      }
      .repo {
        color: #8785df;
      }
    }
    a {
      display: flex;
      align-items: center;
      justify-content: center;
      align-self: flex-start;
      padding: 10px 40px;
      background: #8785df;
      backdrop-filter: blur(6.5px);
      border-radius: 8px;
      font-weight: 500;
      font-size: 20px;
      line-height: 24px;
      transition: opacity 0.5;
      :hover {
        opacity: 0.9;
      }
    }
  }
  img {
    width: 227px;
    height: 246px;
  }
  @media (max-width: 800px) {
    flex-direction: column;
    gap: 80px;
    align-items: center;
    h1 {
      max-width: 450px;
    }
  }
`;
