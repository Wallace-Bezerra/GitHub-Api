import styled from "styled-components";
import { CardContainer } from "../../../Repositories/components/CardRepository/styles";

export const CardFavoritesContainer = styled(CardContainer)`
  max-width: 730px;
  .heading {
    .nameRepository {
      a {
        margin-bottom: 0.4rem;
      }
    }
  }
  .footer {
    .profileUser {
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 1rem;
      img {
        width: 3rem;
        border-radius: 50%;
      }
    }
  }
`;

