import "../styles/App.scss";
import { useEffect, useState } from "react";
import getDataApi from "../services/api";

// import contacts from "../data/contacts.json";
import Filters from "./Filters";
import ListCharacter from "./ListCharacter";

function App() {
  const [characterList, setCharacterList] = useState([]);
  const [houseFilter, setHouseFilter] = useState("Gryffindor");
  const [nameFilter, setNameFilter] = useState("");

  useEffect(() => {
    getDataApi(houseFilter).then((cleanData) => {
      setCharacterList(cleanData);
    });
  }, [houseFilter]);

  const handleFilterHouse = (value) => {
    setHouseFilter(value);
  };
  const handleFilterName = (value) => {
    setNameFilter(value);
  };
  const characterFiltered = characterList
    .filter((eachCharacter) => {
      return eachCharacter.house === houseFilter;
    })
    .filter((eachCharacter) => {
      return nameFilter
        ? eachCharacter.name.includes(nameFilter)
        : eachCharacter;
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
              handleFilterName={handleFilterName}
              nameFilter={nameFilter}
            />
            <ListCharacter characterList={characterFiltered} />
          </main>
        </>
      }
    </div>
  );
}

export default App;
