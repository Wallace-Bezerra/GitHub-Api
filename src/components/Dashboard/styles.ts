import { motion } from "framer-motion";
import styled from "styled-components";

export const DashboardContainer = styled(motion.div)`
  position: relative;
  display: flex;
  gap: 6rem;
  max-width: 100rem;
  width: 100%;
  height: 60rem;
  background: linear-gradient(
    105.66deg,
    #101724 18.56%,
    rgba(23, 32, 49, 0.67) 91.68%
  );
  border-radius: 0.8rem;
  @media (max-width: 1100px) {
    min-height: 100vh;
    max-width: initial;
    border-radius: 0rem;
  }
`;
export const Navbar = styled.aside`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  width: 9.5rem;
  padding-top: 4.6rem;
  text-align: start;
  border-radius: 5.675px 0px 0px 5.675px;
  gap: 4rem;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.19) 0%,
    rgba(255, 255, 255, 0.1349) 100%
  );
  backdrop-filter: blur(12.486px);
  ::after {
    content: "";
    z-index: -1;
    position: absolute;
    top: 0rem;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.1);
    filter: blur(24.972px);
    border-radius: 5.675px;
  }
  img {
    width: 5.448rem;
    height: 5.562rem;
    border-radius: 50%;
    cursor: pointer;
  }
  @media (max-width: 800px) {
    position: absolute;
    bottom: 0rem;
    border-radius: 0rem;
    flex-direction: row-reverse;
    width: 100%;
    padding-top: 0rem;
    justify-content: center;
    height: 6.9rem;
  }
`;

export const Links = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  a {
    display: flex;
    align-items: center;
    width: 4.54rem;
    height: 4.54rem;
    justify-content: center;

    &.active {
      background: rgba(132, 130, 231, 0.66);
      border-radius: 50%;
      transition: background 0.5s ease;
    }
  }
  @media (max-width: 800px) {
    flex-direction: row-reverse;
  }
`;

export const ContentContainer = styled.div`
  padding-top: 10rem;
  padding-right: 4rem;
  width: 100%;
  @media (max-width: 800px) {
    padding-inline: 2rem;
    padding-bottom: 6.9rem;
  }
`;

export const MenuBar = styled.div`
  display: flex;
  gap: 1.4rem;
  position: absolute;
  top: 3.5rem;
  right: 4rem;
`;
