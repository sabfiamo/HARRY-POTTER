// import FilterCity from "./FilterCity";
import FilterHouse from "./FilterHouse";

function Filters({ handleFilterHouse }) {
  return (
    <section className="filter">
      <form>
        <FilterHouse handleFilterHouse={handleFilterHouse} />
        {/* <FilterCity cities={cities} /> */}
      </form>
    </section>
  );
}
export default Filters;
