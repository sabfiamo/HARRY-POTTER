import translate from "../services/translate";
import imageCharacterNotExit from "../images/simbolo-harry.png";

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
          image: eachCharacter.image
            ? eachCharacter.image
            : imageCharacterNotExit,
          alive: eachCharacter.alive,
          gender: eachCharacter.gender,
          alternate_names: eachCharacter.alternate_names,
        };
      });
      return cleanData;
    });
};
export default getDataApi;
