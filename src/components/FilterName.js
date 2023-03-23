import PropTypes from "prop-types";
function FilterName({ handleFilterName, nameFilter }) {
  const handleChange = (ev) => {
    const value = ev.target.value;
    handleFilterName(value);
  };

  return (
    <div className="name">
      <label className="form--label " htmlFor="house">
        Busca por personaje:
        <input
          className="form--input__text"
          name="name"
          id="name"
          onChange={handleChange}
          value={nameFilter}
        ></input>
      </label>
    </div>
  );
}
FilterName.propTypes = {
  handleFilterName: PropTypes.func.isRequired,
  nameFilter: PropTypes.string.isRequired,
};
export default FilterName;
