import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px 20px;
  gap: 12px;
  width: 458.48px;
  background: #252a3a;
  backdrop-filter: blur(3.41297px);
  border-radius: 11.3766px;
  .heading {
    display: flex;
    justify-content: space-between;
    h2 {
      margin-bottom: 4px;
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
    ul {
      display: flex;
      gap: 8px;
      li {
        display: flex;
        gap: 10px;
      }
    }
  }
`;
