import { Dispatch, SetStateAction } from "react";
import { Container } from "./styles";
import { XCircle } from "phosphor-react";
interface ModalUserProps {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  imageUser: string;
}
export const ModalUser = ({ setIsOpen, imageUser }: ModalUserProps) => {
  return (
    <Container>
      <XCircle
        size={40}
        onClick={() => {
          setIsOpen((prev) => !prev);
        }}
      />
      {/* <p>Modal</p> */}
      <img src={imageUser} alt="profile image" />
    </Container>
  );
};
