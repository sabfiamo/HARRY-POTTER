import FilterName from "./FilterName";
import FilterHouse from "./FilterHouse";
import PropTypes from "prop-types";

function Filters({
  handleFilterHouse,
  handleFilterName,
  nameFilter,
  handleSubmit,
  handleOnClick,
  houseFilter,
}) {
  return (
    <section>
      <form className="form" onSubmit={handleSubmit}>
        <FilterName
          handleFilterName={handleFilterName}
          nameFilter={nameFilter}
        />
        <FilterHouse
          handleFilterHouse={handleFilterHouse}
          houseFilter={houseFilter}
        />

        <button
          type="submit"
          className="buttons-img__btn"
          onClick={handleOnClick}
        >
          <i className="detail--article__icon fa-solid fa-chevron-left"></i>
        </button>
      </form>
    </section>
  );
}
Filters.propTypes = {
  handleFilterName: PropTypes.func.isRequired,
  handleFilterHouse: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleOnClick: PropTypes.func.isRequired,
  nameFilter: PropTypes.string.isRequired,
};
export default Filters;
