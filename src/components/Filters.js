import FilterName from "./FilterName";
import FilterHouse from "./FilterHouse";
import PropTypes from "prop-types";

function Filters({
  handleFilterHouse,
  handleFilterName,
  nameFilter,
  handleSubmit,
}) {
  return (
    <section>
      <form className="form" onSubmit={handleSubmit}>
        <FilterName
          handleFilterName={handleFilterName}
          nameFilter={nameFilter}
        />
        <FilterHouse handleFilterHouse={handleFilterHouse} />
      </form>
    </section>
  );
}
Filters.propTypes = {
  handleFilterName: PropTypes.func.isRequired,
  handleFilterHouse: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  nameFilter: PropTypes.string.isRequired,
};
export default Filters;
