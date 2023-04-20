import styled from "styled-components";
import { CardContainer } from "../../../Repositories/components/CardRepository/styles";

export const CardFavoritesContainer = styled(CardContainer)`
  .footer {
    .profileUser {
      display: flex;
      align-items: center;
      gap: 10px;
      img {
        width: 30px;
        border-radius: 50%;
      }
    }
  }
`;
