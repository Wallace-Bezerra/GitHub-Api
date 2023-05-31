import { motion } from "framer-motion";
import styled from "styled-components";

export const NotFoundContainer = styled(motion.div)`
  /* position: relative; */
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
  .info {
    h2 {
      font-family: "Inter";
      font-style: normal;
      font-weight: 700;
      font-size: 64px;
      line-height: 77px;
      color: #9796e3;
      margin-bottom: 10px;
    }
    p {
      font-family: "Inter";
      font-style: normal;
      font-weight: 500;
      font-size: 32px;
      line-height: 39px;
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
    width: 255.32px;
  }
  @media (max-width: 1100px) {
    min-height: 100vh;
    max-width: initial;
    border-radius: 0rem;
  }
  @media (max-width: 800px) {
    flex-direction: column;
    gap: 80px;
    align-items: center;
  }
`;
