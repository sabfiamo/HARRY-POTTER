import "../styles/App.scss";
import { useEffect, useState } from "react";
import { Route, Routes, useLocation, matchPath } from "react-router-dom";

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
  //

  // conseguir el id de la ruta
  const { pathname } = useLocation();
  const routeData = matchPath("character/:id", pathname);
  const characterId = routeData === null ? null : routeData.params.id;
  const characterFound = characterList.find(
    (eachCharacter) => eachCharacter.id === characterId
  );

  return (
    <div className="App">
      {
        /* Aquí va el HTML */
        <>
          <h1 className="title--big">Harry Potter</h1>
          <main className="main">
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Filters
                      handleFilterHouse={handleFilterHouse}
                      handleFilterName={handleFilterName}
                      nameFilter={nameFilter}
                    />
                    <ListCharacter characterList={characterFiltered} />
                  </>
                }
              />
              <Route
                path="/character/:id"
                element={<CharacterDetail characterFound={characterFound} />}
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
