import React, { useContext, useState } from 'react';
import Container from '../Container/Container';
import { styled, Button as MuiButton } from "@mui/material";
import { DataContext } from '../../App';
import ChangeArea from '../ChangeArea';

const ConverterList = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const data = useContext(DataContext);

  const handleButtonClick = (e) => {
    if((pageNumber + 1) * 10 < data.length) {
      setPageNumber(prev => prev + 1);
    } else {
      alert("Більше немає")
    }
  }

  return ( 
    <section>
      <Container>
        { data && data.slice(1, pageNumber * 10).map((currency, index) => 
          <ChangeArea 
            key={currency.txt + index} 
            changeToAmount={currency.rate} 
            changeTo={currency.txt} 
          />
        )}
        <Button color='footer' variant="contained" onClick={handleButtonClick}>Більше валют</Button>
      </Container>  
    </section>
   );
}
 
const Button = styled(MuiButton)(({ theme }) => ({
  color: theme.palette.white,
  width: "250px",
  padding: "10px 0",
  margin: "20px auto",
  display: "block", 
  fontFamily: "Arial",
}))

export default ConverterList;