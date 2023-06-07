import { Dispatch, SetStateAction } from "react";
import { Container } from "./styles";
import { XCircle } from "phosphor-react";
import { motion } from "framer-motion";
interface ModalUserProps {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  imageUser: string;
}

const modalView = {
  open: { opacity: 1 },
  close: { opacity: 0 },
};
export const ModalUser = ({ setIsOpen, imageUser }: ModalUserProps) => {
  return (
    <Container
      variants={modalView}
      initial={"close"}
      animate={"open"}
      exit={"close"}
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          setIsOpen((prev) => !prev);
        }
      }}
      transition={{ duration: 0.5 }}
    >
      <XCircle
        size={40}
        onClick={() => {
          setIsOpen((prev) => !prev);
        }}
      />
      <motion.img
        initial={{ y: 100 }}
        animate={{ y: 0, transition: { duration: 0.4 } }}
        exit={{
          y: 100,
          opacity: 0,
          transition: { duration: 0.2 },
        }}
        src={imageUser}
        alt="profile image"
      />
    </Container>
  );
};
