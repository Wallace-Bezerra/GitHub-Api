import styled from "styled-components";

export const HomeContainer = styled.div`
  position: relative;
  background: linear-gradient(
    106.63deg,
    #101724 18.44%,
    rgba(35, 47, 69, 0.71) 85.31%
  );
  border-radius: 5px;
  max-width: 1000px;
  width: 100%;
  height: 422.28px;
  /* width: 1000px; */
  /* justify-content: center; */
  /* align-items: center; */
  /* display: flex; */
  gap: 100px;
  .favorites {
    background-color: transparent;
    border: none;
    position: absolute;
    top: 32px;
    right: 32px;
    cursor: pointer;
  }

  .InputContainer {
    display: flex;
    flex-direction: column;
    gap: 44px;
    h1 {
      max-width: 401px;
      width: 100%;
      font-family: "Inter";
      color: #ffffff;
      font-weight: 500;
      font-size: 41.4508px;
      line-height: 50px;
      span {
        color: #8785df;
      }
    }
    form {
      position: relative;
      align-self: flex-start;
      input {
        border: none;
        width: 285.8px;
        height: 36.27px;
        background: #5a6074;
        border-radius: 3px;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        color: #ebebeb;
        padding: 8px 15px;
      }
      a {
        svg {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          right: 6px;
          cursor: pointer;
        }
      }
    }
  }
  img {
    max-width: 217.62px;
    width: 100%;
  }
`;
