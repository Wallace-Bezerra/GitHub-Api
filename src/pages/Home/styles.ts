import styled from "styled-components";

export const HomeContainer = styled.div`
  background: linear-gradient(
    106.63deg,
    #101724 18.44%,
    rgba(35, 47, 69, 0.71) 85.31%
  );
  border-radius: 5px;
  padding: 60px 90px;
  display: flex;
  gap: 78px;
  .InputContainer {
    display: flex;
    flex-direction: column;
    gap: 26px;
    h1 {
      max-width: 401px;
      width: 100%;
      font-family: "Inter";
      color: #ffffff;
      font-weight: 500;
      font-size: 42px;
      line-height: 49px;
      span {
        color: #8785df;
      }
    }
    form {
      position: relative;
      align-self: flex-start;
      input {
        border: none;
        width: 220.64px;
        height: 28px;
        background: #5a6074;
        border-radius: 3px;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        color: #ebebeb;
        padding: 8px 15px;
      }
      button {
        border: none;
        img {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          right: 6px;
          cursor: pointer;
        }
      }
    }
  }
`;
