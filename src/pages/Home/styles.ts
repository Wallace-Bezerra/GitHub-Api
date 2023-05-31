import styled from "styled-components";

export const HomeContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6rem;
  flex-wrap: wrap;
  max-width: 100rem;
  width: 100%;
  height: 49.376rem;
  padding: 12rem;
  background: linear-gradient(
    105.66deg,
    #101724 18.56%,
    rgba(23, 32, 49, 0.67) 91.68%
  );
  border-radius: 5.675px;
  .favorites {
    background-color: transparent;
    border: none;
    position: absolute;
    top: 3.2rem;
    right: 3.2rem;
    cursor: pointer;
  }
  .InputContainer {
    display: flex;
    flex-direction: column;
    gap: 4.4rem;
    h1 {
      max-width: 35.5rem;
      width: 100%;
      font-family: "Inter";
      color: #ffffff;
      font-weight: 500;
      font-size: 4.1451rem;
      line-height: 5rem;
      span {
        color: #8785df;
      }
    }
    form {
      position: relative;
      align-self: flex-start;
      input {
        border: none;
        width: 28.58rem;
        height: 3.627rem;
        background: #5a6074;
        border-radius: 0.3rem;
        font-weight: 400;
        font-size: 1.6rem;
        line-height: 1.9rem;
        color: #ebebeb;
        padding: 0.8rem 1.5rem;
        ::-webkit-calendar-picker-indicator {
          opacity: 0;
        }
      }
      button {
        background: none;
        border: none;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: 0.6rem;
        display: flex;
        transition: scale 0.4s;
        :hover {
          scale: 1.1;
        }
        svg {
          cursor: pointer;
        }
      }
    }
  }
  .imageGithub {
    perspective: 124.4rem;
    transform: rotateX(3deg) rotateY(8deg) rotateZ(3deg);
    img {
      border-radius: 2.9rem;
      max-width: 28.6rem;
      width: 100%;
      box-shadow: 0.2rem 1rem 3rem #151927;
      transform: rotateX(10deg) rotateY(-20deg) rotateZ(3deg);
    }
  }
  @media (max-width: 1100px) {
    min-height: 100vh;
    max-width: initial;
    border-radius: 0rem;
  }
  @media (max-width: 600px) {
    padding-inline: 3.4rem;
    .favorites {
      right: 2rem;
    }
    .InputContainer {
      h1 {
        font-size: 3.8rem;
      }
    }
  }
`;
