import React, { useCallback, useState } from "react";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
import { Container, WrapperAreaStyles, EmployeeWrapper } from "./AreaItem.styles";

function AreaItem({ occupation, information }) {
  const [isSelected, setIsSelected] = useState(false);

  const handleChangeIsSelected = useCallback(() => {
    setIsSelected(!isSelected)
  }, [isSelected])

  return (
    <Container>
      <WrapperAreaStyles onClick={handleChangeIsSelected}>
        <p>{occupation}</p>
        {isSelected ? (
          <MdKeyboardArrowUp />
        ) : (
          <MdKeyboardArrowDown />
        )}
      </WrapperAreaStyles>
      {isSelected && <EmployeeWrapper>{information}</EmployeeWrapper>}
    </Container>
  );
}

export default AreaItem;