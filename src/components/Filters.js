import FilterName from "./FilterName";
import FilterHouse from "./FilterHouse";

function Filters({ handleFilterHouse, handleFilterName, nameFilter }) {
  return (
    <section className="filter">
      <form>
        <FilterHouse handleFilterHouse={handleFilterHouse} />
        <FilterName
          handleFilterName={handleFilterName}
          nameFilter={nameFilter}
        />
      </form>
    </section>
  );
}
export default Filters;
