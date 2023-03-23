import houseGryffindor from "../images/gryffindor.png";
import houseHufflepuff from "../images/hufflepuff.png";
import houseRavenclaw from "../images/ravenclaw.png";
import houseSlytherin from "../images/slytherin.png";

function houseHogwarts(house) {
  let icon = "";
  switch (house.toLowerCase()) {
    case "hufflepuff": {
      icon = houseHufflepuff;
      return icon;
    }
    case "ravenclaw": {
      icon = houseRavenclaw;
      return icon;
    }
    case "slytherin": {
      icon = houseSlytherin;
      return icon;
    }
    case "gryffindor": {
      icon = houseGryffindor;
      return icon;
    }
    default:
      icon = "";
      return icon;
  }
}
export default houseHogwarts;
