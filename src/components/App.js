import "../styles/App.scss";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import getDataApi from "../services/api";
import Filters from "./Filters";
import ListCharacter from "./ListCharacter";
import CharacterDetail from "./CharacterDetail";
import Header from "./Header";

function App() {
  const [characterList, setCharacterList] = useState([]);
  const [houseFilter, setHouseFilter] = useState("Gryffindor");
  const [nameFilter, setNameFilter] = useState("");

  useEffect(() => {
    getDataApi(houseFilter).then((cleanData) => {
      setCharacterList(cleanData);
    });
  }, [houseFilter]);

  //funciones handle
  const handleFilterHouse = (value) => {
    setHouseFilter(value);
  };

  const handleFilterName = (value) => {
    setNameFilter(value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  const handleOnClick = (event) => {
    event.preventDefault();

    setHouseFilter("Gryffindor");
    setNameFilter("");
  };

  // conseguir el id de la ruta
  const findCharacter = (characterId) => {
    const characterFound = characterList.find(
      (eachCharacter) => eachCharacter.id === characterId
    );
    return characterFound;
  };
  return (
    <div className="App">
      {
        /* Aquí va el HTML */
        <>
          <Header />
          <main className="main">
            <Routes>
              <Route
                path="/character/:id"
                element={<CharacterDetail findCharacter={findCharacter} />}
              />
              <Route
                path="/"
                element={
                  <>
                    <Filters
                      handleFilterHouse={handleFilterHouse}
                      handleFilterName={handleFilterName}
                      nameFilter={nameFilter}
                      handleSubmit={handleSubmit}
                      handleOnClick={handleOnClick}
                      houseFilter={houseFilter}
                    />
                    <ListCharacter
                      characterList={characterList}
                      nameFilter={nameFilter}
                      houseFilter={houseFilter}
                    />
                  </>
                }
              />

              <Route path="*" element="Error 404: page not found" />
            </Routes>
          </main>
        </>
      }
    </div>
  );
}

export default App;
