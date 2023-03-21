import Character from "./Character";

function ListCharacter({ characterList }) {
  const dataHtml = characterList.map((eachCharacter) => {
    return <Character eachCharacter={eachCharacter} key={eachCharacter.id} />;
  });
  return (
    <section className="list">
      <ul className="cards">{dataHtml}</ul>
    </section>
  );
}
export default ListCharacter;
