import React from 'react';
import { styled } from "@mui/material";

const Container = ({ children }) => {
  return ( 
    <Wrapper className='container'>
      {children}
    </Wrapper>
   );
}

const Wrapper = styled("div")({
  margin: "0 auto",
  maxWidth: "1440px",
  width: "95%"
})
 
export default Container;