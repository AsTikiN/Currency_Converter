import React from 'react';
import Input from '../Input/Input';
import Select from '../Select/Select';
import { styled } from "@mui/material";

const ChangeCard = ({
  selectValue, 
  handleSelectChange, 
  selectList,
  inputValue,
  inputLabel,
  handleInputChange 
}) => {
  return ( 
    <Wrapper>
      <Select value={selectValue} customHandle={handleSelectChange} selectList={selectList} />
      <Input value={inputValue} customHandle={handleInputChange} label={inputLabel} />
    </Wrapper>
   );
}

const Wrapper = styled("div")({
  width: "250px",
  display: "flex",
  flexDirection: "column",
  gap: "15px", 
})
 
export default ChangeCard;