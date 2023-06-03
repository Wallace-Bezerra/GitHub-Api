import styled from "styled-components";
import { CardContainer } from "../../pages/User/styles";
import { motion } from "framer-motion";

export const LinguagueUser = styled(CardContainer)`
  padding-right: 10px;
  .languages {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 2.2rem;
    padding-right: 20px;
    max-height: 19rem;
    overflow-y: scroll;
    overflow-x: hidden;
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
  }
  @media (max-width: 1100px) {
    .languages {
      max-height: initial;
      overflow-y: hidden;
    }
  }
`;
interface LanguagePercentageProps {
  percentage: string;
}
export const LanguagePercentage = styled(motion.li)<LanguagePercentageProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;

  .percentageCard {
    max-width: 200px;
    width: 100%;
    p {
      margin-bottom: 6px;
    }
    .bar {
      width: 100%;
      height: 8px;
      display: block;
      background-color: #48484a;
      position: relative;
      border-radius: 2px;
      transition: all 0.8s;
      :hover {
        ::after {
          width: 100%;
        }
      }
      &::after {
        transition: all 0.8s;
        content: "";
        display: inline-block;
        border-radius: 2px;
        height: 8px;
        position: absolute;
        background-color: #8c3cf2;
        box-shadow: 0px 0px 10px #682db3;
        border-radius: 2px;
        width: ${({ percentage }) => `${percentage}%`};
      }
    }
    @media (max-width: 400px) {
      max-width: 150px;
    }
  }
  .percentage {
    background: linear-gradient(112.72deg, #eaeaea 17.43%, #bcb4c7 70.71%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    white-space: nowrap;
    font-weight: 600;
    font-size: 18px;
    line-height: 19px;
    align-self: end;
  }
`;
