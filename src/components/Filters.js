import FilterName from "./FilterName";
import FilterHouse from "./FilterHouse";
import PropTypes from "prop-types";
import Reset from "./Reset";

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
        <Reset handleOnClick={handleOnClick}></Reset>
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
  houseFilter: PropTypes.string.isRequired,
};
export default Filters;
