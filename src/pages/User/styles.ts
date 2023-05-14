import styled, { keyframes } from "styled-components";

const float = keyframes`
  0%{
    transform: translateY(-2px)
  }
  100%{
    transform: translateY(10px)
  }
`;

export const GridUser = styled.div`
  display: grid;
  /* grid-template-columns: repeat(2, 1fr); */
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px 30px;

  &::-webkit-scrollbar {
    width: 9px; /* width of the entire scrollbar */
  }
  &::-webkit-scrollbar-button {
    height: 100%; /* vertical scrollbar height */
  }

  &::-webkit-scrollbar-track {
    background: #1f2432; /* color of the tracking area */
    border-radius: 5px;
    margin-block: 20px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #484d5f;
    border-radius: 20px; /* roundness of the scroll thumb */
  }
  @media (max-width: 680px) {
    height: 100%;
    overflow: auto;
    padding-right: 20px;
    padding-bottom: 40px;
  }
`;

export const CardContainer = styled.div`
  background: linear-gradient(
    111.61deg,
    #252a3a 46.28%,
    rgba(70, 78, 101, 0.45) 94.39%
  );
  backdrop-filter: blur(3.40522px);
  border-radius: 11.3507px;
  padding-block: 20px;
  padding-inline: 30px;
  &.repository {
    display: flex;
    gap: 20px;
  }
  .publicRepos {
    width: 111.07px;
    height: 107.22px;
    position: relative;
    img {
      width: 100px;
    }
    .valueRepo {
      animation: ${float} 2s alternate infinite;
      position: absolute;
      top: 28px;
      left: -7px;
      z-index: 2;
      .repos {
        padding: 9px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: rgba(255, 255, 255, 0.24);
        backdrop-filter: blur(2.5px);
        border-radius: 10px;
        transform: rotate(-7.71deg);
        /* box-shadow: 0px -10px 0px -6px;
      color: #52545a; */
        span {
          position: relative;
          z-index: 1;
          font-family: "Inter";
          font-style: normal;
          font-weight: 600;
          font-size: 24px;
          line-height: 29px;
          color: #e2e7fa;
        }
        ::after {
          content: "";
          position: absolute;
          width: 31.42px;
          height: 27.06px;
          background: rgba(252, 175, 47, 0.3);
          filter: blur(18.5px);
        }
      }
      .sombra {
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: -1;
        top: -2px;
        left: -4px;
        background: rgba(107, 112, 115, 0.53);
        /* backdrop-filter: blur(6.5px); */
        border-radius: 10px;
        transform: rotate(-7.71deg);
      }
    }
  }
`;

export const CardUser = styled(CardContainer)`
  .infoUser {
    display: flex;
    flex-direction: column;
    gap: 4px;
    .heading {
      display: flex;
      align-items: center;
      gap: 5px 12px;
      flex-wrap: wrap;
    }
    p {
      margin-top: 8px;
      font-weight: 400;
      font-size: 18.1612px;
      line-height: 22px;
      color: #c5e0f9;
    }
  }
  .followContainer {
    display: flex;
    gap: 14px;
    justify-content: flex-end;
    padding-top: 20px;
    .followers,
    .following {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      gap: 8px;

      p {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 2px 6px;
        background: #c5e0f9;
        border-radius: 3.40522px;
        font-weight: 600;
        font-size: 15.891px;
        line-height: 19px;
        color: #0060b8;
      }
    }
  }
`;

export const ProfileUser = styled(CardContainer)`
  align-self: start;
  .heading {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 16px;
    .created {
      display: flex;
      align-items: center;
      gap: 8px;
      p {
        color: #c5e0f9;
      }
    }
  }
  .infoUser {
    display: flex;
    flex-direction: column;
    gap: 14px;
    .bio {
      line-height: 24px;
    }
  }
`;

export const LinguagueUser = styled(CardContainer)`
  .languages {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 22px;
    li {
      display: flex;
      align-items: center;
      gap: 20px;
      p {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 66px;
        height: 25px;
        text-align: center;
        background: #a59f7e;
        border-radius: 3.40522px;
      }
    }
  }
`;
