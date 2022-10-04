import React from 'react';
import { TextField as MuiTextField, styled } from "@mui/material"

const Input = ({ value, setValue, customHandle, label }) => {
  const handleInputChange = (e) => setValue(e.target.value);

  return (
    <TextField 
      label={label}
      variant="outlined" 
      onChange={customHandle ? customHandle : handleInputChange} 
      value={value} 
      size='small'
      fullWidth
    />
  )
}

const TextField = styled(MuiTextField)({
  height: "40px"
})
 
export default Input;