import styled from "styled-components";
export const Wrapper = styled.div`
  height: 100%;
  overflow-y: auto;
  padding-bottom: 20px;
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
  gap: 20px;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
