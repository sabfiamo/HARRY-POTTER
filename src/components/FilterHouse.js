import PropTypes from "prop-types";
function FilterHouse({ handleFilterHouse, houseFilter }) {
  const handleChange = (ev) => {
    const value = ev.target.value;
    handleFilterHouse(value);
  };

  return (
    <div>
      <label className="form--label " htmlFor="house">
        Selecciona la casa:
        <select
          className="form--input__text"
          name="house"
          id="house"
          onChange={handleChange}
          value={houseFilter}
        >
          <option className="form--input__option" value="Gryffindor">
            Gryffindor
          </option>
          <option className="form--input__option" value="Hufflepuff">
            Hufflepuff
          </option>
          <option className="form--input__option" value="Ravenclaw">
            Ravenclaw
          </option>
          <option className="form--input__option" value="Slytherin">
            Slytherin
          </option>
        </select>
      </label>
    </div>
  );
}
FilterHouse.propTypes = {
  handleFilterHouse: PropTypes.func.isRequired,
};
export default FilterHouse;
