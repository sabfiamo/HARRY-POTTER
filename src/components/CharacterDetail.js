import { Link, useParams } from "react-router-dom";

function CharacterDetails({ findCharacter }) {
  const allParams = useParams();
  const characterId = allParams.id;
  const characterFound = findCharacter(characterId);

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

  return (
    <div className="detail">
      <Link className="detail--button" to="/">
        Volver
      </Link>
      <article className="detail--article">
        <img
          className="detail--article__img"
          src={characterFound.image}
          alt="Imagen del personaje"
        />
        <ul className="detail--article__list">
          <li className="detail--article__term">{characterFound.name}</li>
          <li className="detail--article__term">
            Estatus:
            <span className="detail--article__term">
              {characterFound.alive}
            </span>
          </li>
          <li className="detail--article__term">
            Especie:
            <span className="detail--article__term">
              {characterFound.species}
            </span>
          </li>

          <li className="detail--article__term">
            Genero:
            <span className="detail--article__term">
              {characterFound.gender}
            </span>
          </li>
          <li className="detail--article__term">
            Casa:
            <span className="detail--article__term">
              {characterFound.house}
            </span>
          </li>
        </ul>
      </article>
    </div>
  );
}

export default CharacterDetails;
