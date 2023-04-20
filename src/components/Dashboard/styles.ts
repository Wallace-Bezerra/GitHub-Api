import styled from "styled-components";

export const DashboardContainer = styled.div`
  position: relative;
  display: flex;
  gap: 60px;
  max-width: 1000px;
  width: 100%;
  height: 493.76px;
  background: linear-gradient(
    105.66deg,
    #101724 18.56%,
    rgba(23, 32, 49, 0.67) 91.68%
  );
  border-radius: 5.67537px;
`;
export const Navbar = styled.aside`
  display: flex;
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
    /* border: 2.5px solid #d9d9d9; */
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
`;

export const ContentContainer = styled.div`
  padding-top: 100px;
  padding-right: 40px;
  width: 100%;
`;

export const MenuBar = styled.div`
  display: flex;
  gap: 14px;
  position: absolute;
  top: 20px;
  right: 20px;
`;
