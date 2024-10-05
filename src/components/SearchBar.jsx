export function SearchBar({ searchTerm, setSearchTerm }) {
  function updateSearchTerm(e) {
    setSearchTerm(e.target.value);
  }

  return (
    <input
      type="text"
      placeholder="Search posts..."
      value={searchTerm}
      onChange={updateSearchTerm}
      className="w-full md:w-1/3 px-4 py-2 mb-4 md:mb-0 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  );
}
