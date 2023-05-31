import { motion } from "framer-motion";
import styled, { keyframes } from "styled-components";

const float = keyframes`
  0%{
    transform: translateY(-0.2rem)
  }
  100%{
    transform: translateY(1rem)
  }
`;

export const GridUser = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem 3rem;

  &::-webkit-scrollbar {
    width: 0.9rem; /* width of the entire scrollbar */
  }
  &::-webkit-scrollbar-button {
    height: 100%; /* vertical scrollbar height */
  }

  &::-webkit-scrollbar-track {
    background: #1f2432; /* color of the tracking area */
    border-radius: 0.5rem;
    margin-block: 2rem;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #484d5f;
    border-radius: 2rem; /* roundness of the scroll thumb */
  }
  @media (max-width: 680px) {
    height: 100%;
    overflow: auto;
    padding-right: 2rem;
    padding-bottom: 4rem;
  }
`;

export const CardContainer = styled.div`
  background: linear-gradient(
    111.61deg,
    #252a3a 46.28%,
    rgba(70, 78, 101, 0.45) 94.39%
  );
  backdrop-filter: blur(3.405px);
  border-radius: 11.351px;
  padding-block: 2rem;
  padding-inline: 3rem;
  &.repository {
    display: flex;
    gap: 2rem;
    justify-content: space-between;
  }
  .publicRepos {
    width: 11.107rem;
    height: 10.722rem;
    position: relative;
    img {
      width: 10rem;
    }
    .valueRepo {
      animation: ${float} 2s alternate infinite;
      position: absolute;
      top: 28px;
      left: -7px;
      z-index: 2;
      .repos {
        padding: 0.9rem;
        display: flex;
        justify-content: center;
        align-items: center;
        background: rgba(255, 255, 255, 0.24);
        backdrop-filter: blur(2.5px);
        border-radius: 10px;
        transform: rotate(-7.71deg);
        span {
          position: relative;
          z-index: 1;
          font-family: "Inter";
          font-style: normal;
          font-weight: 600;
          font-size: 2.4rem;
          line-height: 2.9rem;
          color: #e2e7fa;
        }
        ::after {
          content: "";
          position: absolute;
          width: 3.142rem;
          height: 2.706rem;
          background: rgba(252, 175, 47, 0.3);
          filter: blur(1.85rem);
        }
      }
      .sombra {
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: -1;
        top: -0.2rem;
        left: -0.4rem;
        background: rgba(107, 112, 115, 0.53);
        border-radius: 1rem;
        transform: rotate(-7.71deg);
      }
    }
  }
`;

export const CardUser = styled(CardContainer)`
  .infoUser {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
    .heading {
      display: flex;
      align-items: center;
      gap: 0.5rem 1.2rem;
      flex-wrap: wrap;
    }
    a {
      width: max-content;
      margin-top: 0.8rem;
      font-weight: 400;
      font-size: 1.8161rem;
      line-height: 2.2rem;
      color: #c5e0f9;
    }
  }
  .followContainer {
    display: flex;
    gap: 1.4rem;
    -webkit-box-pack: end;
    justify-content: flex-start;
    padding-top: 2rem;
    flex-wrap: wrap;
  }
  .followers,
  .following {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 0.8rem;

    p {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0.2rem 0.6rem;
      background: #c5e0f9;
      border-radius: 3.405px;
      font-weight: 600;
      font-size: 1.5891rem;
      line-height: 1.9rem;
      color: #0060b8;
    }
  }
`;

export const ProfileUser = styled(CardContainer)`
  align-self: start;
  .heading {
    display: flex;
    align-items: center;
    gap: 4px 20px;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 1.6rem;
    .created {
      display: flex;
      align-items: center;
      gap: 0.8rem;
      p {
        color: #c5e0f9;
      }
    }
  }
  .infoUser {
    display: flex;
    flex-direction: column;
    gap: 1.4rem;
    .bio {
      line-height: 2.4rem;
    }
  }
`;

export const LinguagueUser = styled(CardContainer)`
  .languages {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 2.2rem;
    li {
      display: flex;
      align-items: center;
      gap: 2rem;
      p {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 6.6rem;
        height: 2.5rem;
        text-align: center;
        background: #a59f7e;
        border-radius: 3.405px;
      }
    }
  }
`;
