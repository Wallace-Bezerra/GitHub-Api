import styled from "styled-components";

export const DashboardContainer = styled.div`
  position: relative;
  display: flex;
  gap: 60px;
  max-width: 1000px;
  width: 100%;
  height: 600px;
  background: linear-gradient(
    105.66deg,
    #101724 18.56%,
    rgba(23, 32, 49, 0.67) 91.68%
  );
  border-radius: 8px;
  @media (max-width: 1100px) {
    min-height: 100vh;
    max-width: initial;
    border-radius: 0px;
  }
`;
export const Navbar = styled.aside`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  width: 95px;
  padding-top: 46px;
  text-align: start;
  border-radius: 5.67537px 0px 0px 5.67537px;
  gap: 40px;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.19) 0%,
    rgba(255, 255, 255, 0.1349) 100%
  );
  backdrop-filter: blur(12.4858px);
  ::after {
    content: "";
    z-index: -1;
    position: absolute;
    top: 0px;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.1);
    filter: blur(24.9716px);
    border-radius: 5.67537px;
  }
  img {
    width: 54.48px;
    height: 55.62px;
    border-radius: 50%;
    cursor: pointer;
    /* border: 2.5px solid #d9d9d9; */
  }
  @media (max-width: 800px) {
    position: absolute;
    bottom: 0px;
    border-radius: 0px;
    flex-direction: row-reverse;
    width: 100%;
    padding-top: 0px;
    justify-content: center;
    height: 69px;
  }
`;

export const Links = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  a {
    display: flex;
    align-items: center;
    width: 45.4px;
    height: 45.4px;
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
  padding-top: 100px;
  padding-right: 40px;
  width: 100%;
  @media (max-width: 800px) {
    padding-inline: 20px;
    padding-bottom: 69px;
  }
`;

export const MenuBar = styled.div`
  display: flex;
  gap: 14px;
  position: absolute;
  top: 35px;
  right: 20px;
`;
