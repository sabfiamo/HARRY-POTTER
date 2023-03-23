import Character from "./Character";
import PropTypes from "prop-types";
import translate from "../services/translate";

function ListCharacter({
  characterList,
  nameFilter,
  houseFilter,
  aliveFilter,
}) {
  //Filtramos por casa y nombre de personaje
  let characterFiltered = characterList
    .filter((eachCharacter) => {
      return eachCharacter.house === houseFilter;
    })
    .filter((eachCharacter) => {
      return nameFilter
        ? eachCharacter.name.toLowerCase().includes(nameFilter.toLowerCase())
        : eachCharacter;
    });
  // .map((eachCharacter) => {
  //   return (eachCharacter = translate(eachCharacter));
  // });
  //Ordenar por nombre de personaje
  characterFiltered.sort((a, b) => a.name.localeCompare(b.name));

  //Construimos el Html
  let mesaggeError = "";
  let dataHtml = characterFiltered.map((eachCharacter) => {
    return <Character eachCharacter={eachCharacter} key={eachCharacter.id} />;
  });

  if (!dataHtml.length && nameFilter) {
    mesaggeError = "No hay ningún personaje que coincida con el nombre: ";
    mesaggeError += nameFilter;

    return (
      <section>
        <span className="character--error">{mesaggeError}</span>
      </section>
    );
  } else {
    return (
      <section>
        <ul className="character">{dataHtml}</ul>
      </section>
    );
  }
}

ListCharacter.propTypes = {
  characterList: PropTypes.array.isRequired,
  nameFilter: PropTypes.string.isRequired,
  houseFilter: PropTypes.string.isRequired,
};
export default ListCharacter;
