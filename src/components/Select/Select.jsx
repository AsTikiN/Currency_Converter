import React, { useState } from 'react';
import { TextField, MenuItem } from "@mui/material";

const Select = ({ value, setValue, selectList, customHandle }) => {
  const handleChange = (e) => setValue(e.target.value);
  
  return (
    <TextField
      select
      value={value || ""}
      onChange={customHandle ? customHandle : handleChange}
      size='small'
      fullWidth
    >
      {selectList?.map((option, index) => (
        <MenuItem key={`${selectList.txt} ${index}`} value={option.txt}>
          {option.txt}
        </MenuItem>
      ))}
    </TextField>
   );
}
 
export default Select;