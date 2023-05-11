import { SlidersHorizontal } from "phosphor-react/dist";
import { FilterButton, FilterContainer } from "./styles";
import { useState } from "react";
import { ModalFilter } from "./components";

export const Filter = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <FilterContainer>
      <FilterButton
        onClick={() => {
          setIsOpen((prev) => !prev);
        }}
      >
        <SlidersHorizontal size={20} />
      </FilterButton>
      {isOpen && <ModalFilter setIsOpen={setIsOpen} />}
    </FilterContainer>
  );
};
