export function SortOptions({ sortOrder, setSortOrder }) {
  return (
    <div className="flex items-center">
      <label className="mr-2 text-gray-600">Sort by Published Date:</label>
      <select
        value={sortOrder}
        onChange={(e) => setSortOrder(e.target.value)}
        className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
    </div>
  );
}
