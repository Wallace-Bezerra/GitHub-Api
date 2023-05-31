import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled(motion.div)`
  width: 100%;
  height: 100%;
  background: rgba(15, 14, 14, 0.65);
  backdrop-filter: blur(6.5px);
  position: absolute;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  svg {
    position: absolute;
    top: 15px;
    right: 15px;
    cursor: pointer;
    transition: 0.4s;
    &:hover {
      scale: 1.1;
      circle {
        fill: #545454;
      }
    }
  }
  img {
    border-radius: 50%;
    max-width: 24.9rem;
    filter: drop-shadow(0px 4.5403px 248.581px rgba(170, 199, 233, 0.35));
  }
  @media (max-width: 1100px) {
    border-radius: 0px;
  }
`;
