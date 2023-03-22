import { Link } from "react-router-dom";

function Character({ eachCharacter }) {
  return (
    <Link className="character--link" to={"/character/" + eachCharacter.id}>
      <li className="character--li">
        <img
          className="character__img"
          src={eachCharacter.image}
          alt="Foto de personaje de Harry Potter"
          title="Foto de personaje de HArry Potter"
        ></img>
        <h4 className="character--title">{eachCharacter.name}</h4>
        {/* <p className="character--description">{eachCharacter.alive}</p> */}
        <p className="character--description">{eachCharacter.species}</p>
        {/* <p className="character--description">{eachCharacter.gender}</p> */}
        {/* <p className="character--description">{eachCharacter.house}</p> */}
      </li>
    </Link>
  );
}
export default Character;
