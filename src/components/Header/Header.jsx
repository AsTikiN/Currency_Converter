import React, { useContext } from 'react';
import { styled } from "@mui/material";
import { DataContext } from '../../App';
import Container from '../Container/Container';

const headerRates = [
  "Євро",
  "Долар США",
] 

const Header = () => {
  const data = useContext(DataContext);

  return ( 
    <Wrapper>
      <Container>
        {
          data && 
            data
            .filter((currency) => headerRates.includes(currency.txt))
            .map((filteredСurrency, index) => 
              <Rate key={index}>
                {`${filteredСurrency.cc}: ${filteredСurrency.rate.toFixed(2)}`}
              </Rate>
            )
        }
        
      </Container>
    </Wrapper>
   );
}

const Wrapper = styled("header")(({ theme }) => ({
  background: theme.palette.footer.main,
  height: "120px",

  "& .container": {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    gap: "15px"
  }
}))

const Rate = styled("div")(({ theme }) => ({
  color: theme.palette.white,
  fontFamily: "Arial",
}))

export default Header;