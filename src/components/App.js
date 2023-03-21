import "../styles/App.scss";
import { useEffect, useState } from "react";
import getDataApi from "../services/api";

// import contacts from "../data/contacts.json";
import Filters from "./Filters";
import ListCharacter from "./ListCharacter";

function App() {
  const [characterList, setCharacterList] = useState([]);
  const [houseFilter, setHouseFilter] = useState("gryffindor");

  useEffect(() => {
    getDataApi(houseFilter).then((cleanData) => {
      console.log(cleanData);
      setCharacterList(cleanData);
    });
  }, [houseFilter]);

  const handleFilterHouse = (value) => {
    setHouseFilter(value);
  };
  const characterFiltered = characterList.filter((eachCharacter) => {
    return eachCharacter.house === houseFilter;
  });
  return (
    <div className="App">
      {
        /* Aquí va el HTML */
        <>
          <h1 className="title--big">Harry Potter</h1>
          <main className="main">
            <Filters
              handleFilterHouse={handleFilterHouse}
              // cities={getCities()}
            />
            <ListCharacter characterList={characterFiltered} />
          </main>
        </>
      }
    </div>
  );
}

export default App;
