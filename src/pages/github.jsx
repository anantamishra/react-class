import React, { useState } from "react";

export const GitHubProfile = () => {
  const [username, setUsername] = useState("");
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleFetchProfile = () => {
    setLoading(true);
    setError(null);

    fetch(`https://api.github.com/users/${username}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("User not found or network error");
        }
        return response.json();
      })
      .then((data) => {
        setProfile(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
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
          GitHub Profile Lookup
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

        {profile && !loading && !error && (
          <div className="border border-gray-300 rounded-lg p-4 mt-4 bg-gray-50">
            <img
              src={profile.avatar_url}
              alt={`${profile.login} avatar`}
              className="w-24 h-24 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-bold text-center text-gray-800">
              {profile.name || profile.login}
            </h3>
            <p className="text-center text-gray-600 mb-4">
              {profile.bio || "No bio available"}
            </p>
            <div className="flex justify-between text-gray-700 mb-4">
              <p>
                <strong>Followers:</strong> {profile.followers}
              </p>
              <p>
                <strong>Following:</strong> {profile.following}
              </p>
            </div>
            <p className="text-center text-gray-700 mb-4">
              <strong>Public Repos:</strong> {profile.public_repos}
            </p>
            <div className="text-center">
              <a
                href={profile.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                View GitHub Profile
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
