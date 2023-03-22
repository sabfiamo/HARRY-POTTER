import Character from "./Character";

function ListCharacter({ characterList, nameFilter }) {
  //No existen valores coincidentes
  // if (!characterFiltered.length) {
  //   mesaggeError = "No hay ningún personaje que coincida con la palabra ";
  //   mesaggeError += nameFilter;

  let dataHtml = characterList.map((eachCharacter) => {
    return <Character eachCharacter={eachCharacter} key={eachCharacter.id} />;
  });
  console.log(dataHtml);
  if (!dataHtml.length) {
    let mesaggeError = "No hay ningún personaje que coincida con el nombre: ";
    mesaggeError += nameFilter;

    return (
      <section>
        <span className="text--error">{mesaggeError}</span>
      </section>
    );
  } else {
    return (
      <section className="list">
        <ul className="cards">{dataHtml}</ul>
      </section>
    );
  }
}
export default ListCharacter;
