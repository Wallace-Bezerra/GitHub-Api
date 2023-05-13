import styled from "styled-components";
export const Wrapper = styled.div`
  height: 100%;
  overflow-y: auto;
  ::-webkit-scrollbar {
    width: 9px; /* width of the entire scrollbar */
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
`;
export const RepositoriesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  justify-content: center;
  align-items: center;
  max-width: 620px;
  min-height: 100%;
  @media (max-width: 860px) {
    padding-right: 20px;
  }
`;
