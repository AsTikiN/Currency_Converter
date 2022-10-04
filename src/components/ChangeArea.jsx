import React, { useState, useContext, useEffect } from 'react';
import ChangeCard from './Card/ChangeCard';
import { styled, Typography } from "@mui/material";
import { DataContext } from '../App';

const ChangeArea = ({ changeTo, changeToAmount }) => {
  const [changeInfo, setChangeInfo] = useState({
    changeFrom: "Гривня",
    changeTo: changeTo,
    changeFromAmount: 1,
    changeToAmount: changeToAmount,
  })

  const data = useContext(DataContext);

  const handleSelectChange = (field, secondaryFieldAmount) => 
    (e) => {
      const changedRate = data.find(rate => rate.txt === e.target.value).rate;
      const secondaryRate = data.find(rate => rate.txt === changeInfo[secondaryFieldAmount.slice(0, secondaryFieldAmount.length - 6)]).rate;
      const fieldValue = secondaryRate > changedRate ? changeInfo[secondaryFieldAmount] / Math.max(secondaryRate, changedRate) * Math.min(secondaryRate, changedRate) 
      : changeInfo[secondaryFieldAmount] / Math.min(secondaryRate, changedRate) * Math.max(secondaryRate, changedRate);
      setChangeInfo((prev) => ({...prev, [field]: e.target.value, [`${field}Amount`]: fieldValue }))
    }

  const handleInputChange = (changedField, secondaryField) => 
    (e) => {
      const changedRate = data.find(rate => rate.txt === changeInfo[changedField.slice(0, changedField.length - 6)]).rate;
      const secondaryRate = data.find(rate => rate.txt === changeInfo[secondaryField.slice(0, secondaryField.length - 6)]).rate;
      const value = e.target.value;

      if(!isNaN(+value) && value.trim().length === value.length) {
        const secondaryValue = +value / Math.max(changedRate, secondaryRate) * Math.min(changedRate, secondaryRate);
        setChangeInfo((prev) => ({...prev, [changedField]: value, [secondaryField]: secondaryValue.toFixed(4)}))
      }
    }

  return ( 
    <Wrapper>
      <Typography>{changeTo}</Typography>
      <CardsWrapper>
        <ChangeCard 
          selectValue={changeInfo.changeFrom}
          handleSelectChange={handleSelectChange("changeFrom", "changeToAmount")}
          selectList={data}
          inputValue={changeInfo.changeFromAmount}
          inputLabel="В мене є"
          handleInputChange={handleInputChange("changeFromAmount", "changeToAmount")}
          />
        <ChangeCard 
          selectValue={changeInfo.changeTo}
          handleSelectChange={handleSelectChange("changeTo",  "changeFromAmount")}
          selectList={data}
          inputValue={changeInfo.changeToAmount}
          inputLabel="Я отримаю"
          handleInputChange={handleInputChange("changeToAmount", "changeFromAmount")}
          />
      </CardsWrapper>
    </Wrapper>
   );
}

const Wrapper = styled("div")(({ theme }) => ({
  marginTop: "40px",
  border: `2px solid ${theme.palette.footer.main}`,
  borderRadius: "5px",
  padding: "15px"
}))

const CardsWrapper = styled("div")({
  marginTop: "10px",
  display: "flex",
  gap: "40px",
})
 
export default ChangeArea;