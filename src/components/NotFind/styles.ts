import styled from "styled-components";

export const NotFindContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.4rem;
  align-self: center;
  padding-block: 10px;

  button {
    margin-left: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.7rem 0.8rem;
    background: #7071b6;
    border-radius: 6px;
    border: none;
    cursor: pointer;
    transition: scale 0.4s;
    :hover {
      scale: 1.07;
    }
  }
`;
