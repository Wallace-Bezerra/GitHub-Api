import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled(motion.ul)`
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 12px;
  top: 30px;
  left: 0px;
  padding: 1.2rem;
  background: #717885;
  border-radius: 5.68828px;
  z-index: 2;
  li {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    cursor: pointer;
  }
`;
