export default function Filters({
  categories,
  setCategory,
}: any) {
  return (
    <div className="sidebar">
      <h3>Filters</h3>

      <div className="filter-title">Category</div>
      <select onChange={(e) => setCategory(e.target.value)}>
        <option value="all">All</option>
        {categories.map((c: string) => (
          <option key={c}>{c}</option>
        ))}
      </select>

      <div className="filter-title">Price</div>
      <input type="range" min="0" max="2000" />

      <div className="filter-title">Ratings</div>
      ⭐⭐⭐⭐☆

      <div className="filter-title">Brands</div>
      <select>
        <option>All Brands</option>
      </select>
    </div>
  );
}