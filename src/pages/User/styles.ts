import styled from "styled-components";

export const GridUser = styled.div`
  display: grid;
  /* grid-template-columns: repeat(2, 1fr); */
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px 30px;
`;

export const CardContainer = styled.div`
  background: #252a3a;
  backdrop-filter: blur(3.40522px);
  border-radius: 11.3507px;
  padding-block: 14px;
  padding-inline: 20px;
  &.repository {
    justify-self: flex-start;
    align-self: flex-start;
  }
`;

export const CardUser = styled(CardContainer)`
  .infoUser {
    display: flex;
    flex-direction: column;
    gap: 4px;
    .heading {
      display: flex;
      align-items: center;
      gap: 5px 12px;
      flex-wrap: wrap;
    }
    p {
      margin-top: 8px;
      font-weight: 400;
      font-size: 18.1612px;
      line-height: 22px;
      color: #c5e0f9;
    }
  }
  .Followers {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 14px;
    padding-top: 16px;
    p {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 2px 4px;
      background: #c5e0f9;
      border-radius: 3.40522px;
      font-weight: 600;
      font-size: 15.891px;
      line-height: 19px;
      color: #101010;
    }
  }
`;

export const ProfileUser = styled(CardContainer)`
  align-self: start;
  .heading {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 16px;
    .created {
      display: flex;
      align-items: center;
      gap: 8px;
      p {
        color: #c5e0f9;
      }
    }
  }
  .infoUser {
    display: flex;
    flex-direction: column;
    gap: 14px;
    .bio {
      line-height: 24px;
    }
  }
`;

export const LinguagueUser = styled(CardContainer)`
  .languages {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 22px;
    li {
      display: flex;
      align-items: center;
      gap: 20px;
      p {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 66px;
        height: 25px;
        text-align: center;
        background: #a59f7e;
        border-radius: 3.40522px;
      }
    }
  }
`;
