function Character({ eachCharacter }) {
  return (
    <li class="card">
      <a href=".">
        <img
          class="card__img"
          src={
            eachCharacter.image
              ? eachCharacter.image
              : `https://via.placeholder.com/210x295/ffffff/666666/?text=HarryPotter`
          }
          alt="Foto de personaje de Harry Potter"
          title="Foto de personaje de HArry Potter"
        ></img>
        <h4 class="card__title">{eachCharacter.name}</h4>
        <p class="card__description">{eachCharacter.alive}</p>
        <p class="card__description">{eachCharacter.species}</p>
        <p class="card__description">{eachCharacter.gender}</p>
        <p class="card__description">{eachCharacter.house}</p>
      </a>
    </li>
  );
}
export default Character;
