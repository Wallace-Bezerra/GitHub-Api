import { motion } from "framer-motion";
import styled from "styled-components";

interface FavoritesProps {
  isFavorite: boolean | undefined;
}
export const CardContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  padding: 1.6rem 2rem;
  gap: 1.2rem;
  width: 100%;
  background: #252a3a;
  backdrop-filter: blur(0.3413rem);
  border-radius: 11.377px;
  .heading {
    display: flex;
    justify-content: space-between;
    a {
      margin-bottom: 0.4rem;
      font-size: 2.4rem;
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
    gap: 2rem;
    ul {
      display: flex;
      gap: 1rem;
      flex: 1;
      flex-wrap: wrap;
      max-height: 6.5rem;
      overflow-y: overlay;
      margin-right: -0.8rem;
      padding-right: 1.4rem;
      ::-webkit-scrollbar {
        width: 0.9rem; /* width of the entire scrollbar */
      }
      ::-webkit-scrollbar-button {
        height: 100%; /* vertical scrollbar height */
      }

      ::-webkit-scrollbar-track {
        background: #1f2432; /* color of the tracking area */
        border-radius: 0.5rem;
        margin-block: 2rem;
      }

      ::-webkit-scrollbar-thumb {
        background-color: #484d5f;
        border-radius: 2rem; /* roundness of the scroll thumb */
      }
      li {
        display: flex;
        gap: 1rem;
        flex-wrap: wrap;
        background-color: rgba(255, 255, 255, 0.15);
        backdrop-filter: blur(0.3413rem);
        padding: 0.3rem 0.6rem;
        border-radius: 0.4rem;
        span {
          color: #f162df;
        }
      }
    }
    .commits {
      display: flex;
      gap: 0.8rem;
    }
  }
  @media (max-width: 960px) {
    .heading {
      a {
        font-size: 2.2rem;
      }
    }
    .footer {
      display: grid;
      grid-template-columns: 1fr;
      ul {
        flex: initial;
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
