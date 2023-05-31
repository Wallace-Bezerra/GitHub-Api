import { motion } from "framer-motion";
import styled from "styled-components";
export const Wrapper = styled.div`
  height: 100%;
  overflow-y: auto;
  ::-webkit-scrollbar {
    width: 0.9rem; /* width of the entire scrollbar */
  }

  ::-webkit-scrollbar-track {
    background: #1f2432; /* color of the tracking area */
    border-radius: 0.5rem;
    margin-block: 2rem;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #484d5f;
    border-radius: 2rem; /* roundness of the scroll thumb */
  }
`;
export const RepositoriesContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  justify-content: center;
  align-items: center;
  max-width: 620px;
  min-height: 100%;
  position: relative;
  padding-bottom: 2rem;
  #top {
    position: absolute;
    top: 0rem;
  }
  .last {
    height: 0.2rem;
    position: absolute;
    bottom: 3.2rem;
  }
  @media (max-width: 86rem) {
    padding-right: 2rem;
  }
`;
