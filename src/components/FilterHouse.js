function FilterHouse({ handleFilterHouse }) {
  const handleChange = (ev) => {
    const value = ev.target.value;
    handleFilterHouse(value);
  };

  return (
    <>
      <label className="form__label " htmlFor="house">
        Selecciona la casa:
      </label>
      <select
        className="form__input-text"
        name="house"
        id="house"
        onChange={handleChange}
      >
        <option value="Gryffindor">Gryffindor</option>
        <option value="Hufflepuff">Hufflepuff </option>
        <option value="Ravenclaw">Ravenclaw </option>
        <option value="Slytherin">Slytherin</option>
      </select>
    </>
  );
}
export default FilterHouse;
