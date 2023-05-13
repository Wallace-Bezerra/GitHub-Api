import styled from "styled-components";

export const FavoritesContainer = styled.div`
  position: relative;
  padding-top: 100px;
  padding-inline: 36px;
  width: 1000px;
  /* width: 100%; */
  /* max-width: 1000px; */
  height: 493.76px;
  background: linear-gradient(
    105.66deg,
    #101724 18.56%,
    rgba(23, 32, 49, 0.67) 91.68%
  );
  border-radius: 5.67537px;
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

export const CardFavoritesContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 30px;
  padding-bottom: 40px;
`;
