import { Link } from "react-router-dom";

function Character({ eachCharacter }) {
  return (
    <li className="card">
      <Link to={"/character/" + eachCharacter.id}>
        <img
          className="card__img"
          src={eachCharacter.image}
          alt="Foto de personaje de Harry Potter"
          title="Foto de personaje de HArry Potter"
        ></img>
        <h4 className="card__title">{eachCharacter.name}</h4>
        <p className="card__description">{eachCharacter.alive}</p>
        <p className="card__description">{eachCharacter.species}</p>
        <p className="card__description">{eachCharacter.gender}</p>
        <p className="card__description">{eachCharacter.house}</p>
      </Link>
    </li>
  );
}
export default Character;
