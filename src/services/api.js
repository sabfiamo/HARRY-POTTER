import translate from "../services/translate";

const getDataApi = (house) => {
  return fetch(`https://hp-api.onrender.com/api/characters/house/${house}`)
    .then((response) => response.json())
    .then((data) => {
      const cleanData = data.map((eachCharacter) => {
        eachCharacter = translate(eachCharacter);
        return {
          id: eachCharacter.id,
          name: eachCharacter.name,
          species: eachCharacter.species,
          house: eachCharacter.house,
          image:  eachCharacter.image
              ? eachCharacter.image
              : `https://via.placeholder.com/210x295/ffffff/666666/?text=HarryPotter`,
          alive: eachCharacter.alive,
          gender: eachCharacter.gender,
        };
      });
      return cleanData;
    });
};
export default getDataApi;
