import FilterName from "./FilterName";
import FilterHouse from "./FilterHouse";

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
export default Filters;
