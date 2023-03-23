import { Link } from "react-router-dom";
import PropTypes from "prop-types";

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
        <p className="character--description">{eachCharacter.species}</p>
        <p className="character--description">{eachCharacter.alive}</p>
      </li>
    </Link>
  );
}
Character.propTypes = {
  eachCharacter: PropTypes.object.isRequired,
};
export default Character;
