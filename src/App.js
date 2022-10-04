import { createContext, useState, useEffect } from "react";
import Header from "./components/Header/Header";
import ConverterList from "./components/ConverterList/ConverterList";

export const DataContext = createContext({});

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json")
      .then((res) => res.json())
      .then((data) => setData([{ r030: 1, txt: "Гривня", rate: 1, cc: "UAH", exchangedate: "04.10.2022" }, ...data]));
  }, []);

  return (
    <DataContext.Provider value={data}>
      <Header />
      <ConverterList />
    </DataContext.Provider>
  );
}

export default App;
