import styled from "styled-components";
import { CardContainer } from "../../../Repositories/components/CardRepository/styles";

export const CardFavoritesContainer = styled(CardContainer)`
  max-width: 730px;
  .heading {
    .nameRepository {
      a {
        margin-bottom: 4px;
      }
    }
  }
  .footer {
    .profileUser {
      cursor: pointer;
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
