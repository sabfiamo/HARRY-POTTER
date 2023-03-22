import FilterName from "./FilterName";
import FilterHouse from "./FilterHouse";

function Filters({ handleFilterHouse, handleFilterName, nameFilter }) {
  return (
    <section>
      <form className="form">
        <FilterName
          handleFilterName={handleFilterName}
          nameFilter={nameFilter}
        />
        <FilterHouse handleFilterHouse={handleFilterHouse} />
      </form>
    </section>
  );
}
export default Filters;
