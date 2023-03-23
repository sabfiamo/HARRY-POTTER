import "../styles/App.scss";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import logoHarryPotter from "../images/harry-potter-logo.png";
import getDataApi from "../services/api";
import Filters from "./Filters";
import ListCharacter from "./ListCharacter";
import CharacterDetail from "./CharacterDetail";

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

  //filtrado por párametros de entrada
  const characterFiltered = characterList
    .filter((eachCharacter) => {
      return eachCharacter.house === houseFilter;
    })
    .filter((eachCharacter) => {
      return nameFilter
        ? eachCharacter.name.toLowerCase().includes(nameFilter.toLowerCase())
        : eachCharacter;
    });

  //Ordenar por nombre
  characterFiltered.sort((a, b) => a.name.localeCompare(b.name));

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
          <header className="header">
            <img
              className="header--image"
              src={logoHarryPotter}
              alt="Logo de HarryPotter"
            />
          </header>
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
                      characterList={characterFiltered}
                      nameFilter={nameFilter}
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
