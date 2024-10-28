import React, { useState } from "react";

export const GitHubRepos = () => {
  const [username, setUsername] = useState("");
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleFetchProfile = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `https://api.github.com/users/${username}/repos`
      );

      if (!response.ok) {
        throw new Error("User not found or network error");
      }

      const data = await response.json();
      setRepos(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleFetchProfile();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          GitHub Repos Lookup
        </h2>
        <form onSubmit={handleSubmit} className="flex items-center mb-4">
          <input
            type="text"
            value={username}
            onChange={handleInputChange}
            placeholder="Enter GitHub username"
            className="flex-grow px-4 py-2 border rounded-l-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-r-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Search
          </button>
        </form>

        {loading && <p className="text-blue-500">Loading...</p>}
        {error && <p className="text-red-500">Error: {error}</p>}

        {repos && !loading && !error && (
          <div className="border border-gray-300 rounded-lg p-4 mt-4 bg-gray-50 gap-4 flex flex-col">
            {repos.map((repo) => {
              return (
                <div className="border  px-5  py-3 rounded shadow">
                  {repo.name}
                  {/* add your ui here */}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
