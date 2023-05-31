import { motion } from "framer-motion";
import styled from "styled-components";

export const NotFindContainer = styled(motion.div)`
  align-items: center;
  justify-content: center;
  gap: 120px;
  display: flex;
  max-width: 100rem;
  width: 100%;
  min-height: 49.376rem;
  background: linear-gradient(
    105.66deg,
    #101724 18.56%,
    rgba(23, 32, 49, 0.67) 91.68%
  );
  border-radius: 5.675px;
  padding-block: 80px;
  padding-inline: 40px;
  .info {
    h2 {
      font-weight: 700;
      font-size: 32px;
      line-height: 39px;
      margin-bottom: 5px;
    }
    p {
      color: #9796e3;
      font-weight: 500;
      font-size: 24px;
      line-height: 29px;
      margin-bottom: 45px;
      max-width: 213px;
    }
    a {
      width: 100%;
      padding: 10px 40px;
      font-size: 20px;
      line-height: 24px;
      background: #8785df;
      border-radius: 8px;
      transition: opacity 0.4s;
      :hover {
        opacity: 0.9;
      }
    }
  }
  img {
    width: 260px;
    position: relative;
    top: 23px;
  }
  @media (max-width: 1100px) {
    min-height: 100vh;
    max-width: initial;
    border-radius: 0rem;
  }
  @media (max-width: 800px) {
    flex-direction: column;
    gap: 50px;
    justify-content: flex-start;
    align-items: center;
    img {
      width: 210px;
    }
  }
`;
