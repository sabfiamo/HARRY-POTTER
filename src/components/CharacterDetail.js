import { Link } from "react-router-dom";
import "../styles/page/characterDetails.scss";

function CharacterDetails({ characterFound }) {
  return (
    <div className="character">
      <Link className="character--button" to="/">
        Volver
      </Link>
      <article className="character--article">
        <img
          className="character--article__img"
          src={characterFound.image}
          alt="Imagen del personaje"
        />
        <ul className="character--article__list">
          <li className="character--article__term">{characterFound.name}</li>
          <li className="character--article__term">
            Estatus:
            <span className="character--article__term">
              {characterFound.alive}
            </span>
          </li>
          <li className="character--article__term">
            Especie:
            <span className="character--article__term">
              {characterFound.species}
            </span>
          </li>

          <li className="character--article__term">
            Genero:
            <span className="character--article__term">
              {characterFound.gender}
            </span>
          </li>
          <li className="character--article__term">
            Casa:
            <span className="character--article__term">
              {characterFound.house}
            </span>
          </li>
        </ul>
      </article>
    </div>
  );
}
export default CharacterDetails;
