import { Link } from "react-router-dom";

function CharacterDetails({ characterFound }) {
  return (
    <div className="contacto-detail">
      <h2>Detalle del contacto</h2>

      <article>
        <dl>
          <dt className="term"></dt>
          <dd>
            <img src={characterFound.image} alt="Imagen del personaje" />
          </dd>
          <dt className="term">Nombre del personaje: </dt>
          <dd className="detail">{characterFound.name}</dd>
          <dt className="term">Estatus: </dt>
          <dd className="detail">{characterFound.alive}</dd>
          <dt className="term">Especie: </dt>
          <dd className="detail">{characterFound.species}</dd>
          <dt className="term">Genero: </dt>
          <dd className="detail">{characterFound.gender}</dd>
          <dt className="term">Casa: </dt>
          <dd className="detail">{characterFound.house}</dd>
        </dl>
      </article>
      <Link className="buttons" to="/">
        Volver
      </Link>
    </div>
  );
}
export default CharacterDetails;
