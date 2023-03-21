function FilterName({ handleFilterName, nameFilter }) {
  const handleChange = (ev) => {
    const value = ev.target.value;
    handleFilterName(value);
  };

  return (
    <>
      <label className="form__label " htmlFor="house">
        Nombre:
      </label>
      <input
        className="form__input-text"
        name="name"
        id="name"
        onChange={handleChange}
        value={nameFilter}
      ></input>
    </>
  );
}
export default FilterName;
