import styled from "styled-components";

interface FavoritesProps {
  isFavorite: boolean | undefined;
}
export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px 20px;
  gap: 12px;
  /* max-width: 540px; */
  width: 100%;
  background: #252a3a;
  backdrop-filter: blur(3.41297px);
  border-radius: 11.3766px;
  .heading {
    display: flex;
    justify-content: space-between;
    a {
      margin-bottom: 4px;
      font-size: 24px;
      display: block;
    }
    svg {
      cursor: pointer;
    }
    .nameRepository {
      span {
        color: #8785df;
      }
    }
  }
  .footer {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    ul {
      display: flex;
      gap: 10px;
      flex: 1;
      flex-wrap: wrap;
      max-height: 65px;
      overflow-y: overlay;
      margin-right: -8px;
      padding-right: 14px;
      ::-webkit-scrollbar {
        width: 9px; /* width of the entire scrollbar */
      }
      ::-webkit-scrollbar-button {
        height: 100%; /* vertical scrollbar height */
      }

      ::-webkit-scrollbar-track {
        background: #1f2432; /* color of the tracking area */
        border-radius: 5px;
        margin-block: 20px;
      }

      ::-webkit-scrollbar-thumb {
        background-color: #484d5f;
        border-radius: 20px; /* roundness of the scroll thumb */
      }
      li {
        display: flex;
        gap: 10px;
        flex-wrap: wrap;
        background-color: rgba(255, 255, 255, 0.15);
        backdrop-filter: blur(3.41297px);
        padding: 3px 6px;
        border-radius: 4px;
        span {
          color: #f162df;
        }
      }
    }
  }
  @media (max-width: 600px) {
    .heading {
      a {
        font-size: 22px;
      }
    }
    .footer {
      display: grid;
      grid-template-columns: 1fr;
      /* grid-template-rows: repeat(3, 1fr); */
      /* align-items: flex-start; */
      ul {
        flex: initial;
        /* flex-wrap: nowrap; */
      }
      .commits {
        justify-self: flex-end;
      }
    }
  }
`;
export const Favorites = styled.div<FavoritesProps>`
  align-self: flex-start;
  svg {
    transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
    path {
      fill: ${({ isFavorite }) => (isFavorite ? "white" : "transparent")};
    }
    /* &:hover {
      scale: ${({ isFavorite }) => (isFavorite ? 1.2 : 1)};
    } */
  }
`;
export const cardStyleClass = CardContainer.toString();
