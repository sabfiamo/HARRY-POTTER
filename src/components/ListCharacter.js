import Character from "./Character";

function ListCharacter({ characterList, nameFilter }) {
  let mesaggeError = "";
  let dataHtml = characterList.map((eachCharacter) => {
    return <Character eachCharacter={eachCharacter} key={eachCharacter.id} />;
  });
  console.log(dataHtml);
  if (!dataHtml.length && nameFilter) {
    mesaggeError = "No hay ningún personaje que coincida con el nombre: ";
    mesaggeError += nameFilter;

    return (
      <section>
        <span className="text--error">{mesaggeError}</span>
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
export default ListCharacter;
