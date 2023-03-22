function FilterName({ handleFilterName, nameFilter }) {
  const handleChange = (ev) => {
    const value = ev.target.value;
    handleFilterName(value);
  };

  return (
    <div>
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
export default FilterName;
