function translate(data) {
  // console.log(data);
  let aliveSpanish = "";
  const genderSpanish =
    data.gender.toLowerCase() === "female" ? "Mujer" : "Hombre";
  data.gender = genderSpanish;
  if (genderSpanish === "Mujer") {
    aliveSpanish = data.alive ? "Viva" : "Muerta";
  } else {
    aliveSpanish = data.alive ? "Vivo" : "Muerto";
  }

  data.alive = aliveSpanish;
  switch (data.species.toLowerCase()) {
    case "human": {
      data.species = "Humana";
      return data;
    }
    case "half-giant": {
      data.species = "Gigante Medio";
      return data;
    }
    case "werewolf": {
      data.species = "Hombre-Lobo";
      return data;
    }
    case "ghost": {
      data.species = "Fantasma";
      return data;
    }
    default:
      return data;
  }
}
export default translate;
