import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px 20px;
  gap: 12px;
  max-width: 540px;
  width: 100%;
  background: #252a3a;
  backdrop-filter: blur(3.41297px);
  border-radius: 11.3766px;
  :last-child {
    /* background-color: blue; */
  }
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
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    ul {
      display: flex;
      gap: 10px;
      flex: 1;
      flex-wrap: wrap;
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
`;
export const cardStyleClass = CardContainer.toString();
