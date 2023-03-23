import { Link, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import houseHogwarts from "../services/houseHogwarts";

function CharacterDetails({ findCharacter }) {
  const allParams = useParams();
  const characterId = allParams.id;
  const characterFound = findCharacter(characterId);

  //Si no encuentra el personaje
  if (!characterFound) {
    return (
      <div className="detail">
        <Link className="detail--button" to="/">
          Volver
        </Link>
        <article className="detail--article">
          <p className="detail--article__error">
            El personaje que buscas no existe
          </p>
        </article>
      </div>
    );
  }
  //Iconos de alive
  const iconClassName = characterFound.alive.includes("Viv")
    ? "fa-solid fa-heart-pulse"
    : "fa-solid fa-skull-crossbones";
  console.log(houseHogwarts(characterFound.house));
  //Si encuentra el personaje lo pinta en Html
  return (
    <div className="detail">
      <Link className="detail--button" to="/">
        <i className="detail--article__icon fa-solid fa-chevron-left"></i>
        Volver
      </Link>
      <article className="detail--article">
        <img
          className="detail--article__img"
          src={characterFound.image}
          alt="Imagen del personaje"
        />
        <div className="detail--article__container">
          <ul className="detail--article__list">
            <li className="detail--article__term">{characterFound.name}</li>
            <li className="detail--article__term">
              Estatus:
              <span className="detail--article__span">
                {" " + characterFound.alive}
                <i className={"detail--article__icon " + iconClassName}></i>
              </span>
            </li>
            <li className="detail--article__term">
              Especie:
              <span className="detail--article__span">
                {" " + characterFound.species}
              </span>
            </li>

            <li className="detail--article__term">
              Genero:
              <span className="detail--article__span">
                {" " + characterFound.gender}
              </span>
            </li>
            <li className="detail--article__term">
              {characterFound.alternate_names.length
                ? "Nombres alternativos: "
                : ""}
              <span className="detail--article__span">
                {" " + characterFound.alternate_names}
              </span>
            </li>
            <li className="detail--article__term">
              Casa:
              <span className="detail--article__span">
                {" " + characterFound.house}
              </span>
            </li>
          </ul>
          <img
            className="detail--article__house"
            src={houseHogwarts(characterFound.house)}
            alt="Imagen casa Hogwarts"
          />
        </div>
      </article>
    </div>
  );
}
CharacterDetails.propTypes = {
  findCharacter: PropTypes.func.isRequired,
};
export default CharacterDetails;
