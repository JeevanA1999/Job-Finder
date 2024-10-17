import React, { useState, useEffect } from "react";
import axios from "axios";
import './Search.css';
import { HiSearch } from 'react-icons/hi'; 


const Search = () => {
  const [query, setQuery] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);

  // Function to convert string to camel case with spaces
  const toCamelCaseWithSpaces = (text) => {
    return text
      .replace(/([a-z0-9])([A-Z])/g, '$1 $2') // Add space before capital letters
      .replace(/[_-]/g, ' ')                  // Replace underscores or hyphens with space
      .replace(/\b\w/g, (match) => match.toUpperCase()); // Capitalize first letter of each word
  };

  const fetchDefaultUsers = async () => {
    setLoading(true);
    setError("");

    try {
      const response = await axios.get(`https://api.github.com/search/users?q=type:user&per_page=12`);
      setUsers(response.data.items);
    } catch (err) {
      setError("Error fetching default users. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const fetchUsers = async (text) => {
    setLoading(true);
    setError("");

    try {
      const response = await axios.get(`https://api.github.com/search/users?q=${text}`);
      setUsers(response.data.items);
    } catch (err) {
      setError("Error fetching users. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const fetchUserDetails = async (username) => {
    setLoading(true);

    try {
      const response = await axios.get(`https://api.github.com/users/${username}`);
      setSelectedUser(response.data);
    } catch (err) {
      setError("Error fetching user details.");
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    if (value) {
      fetchUsers(value);
    } else {
      fetchDefaultUsers();
    }
  };

  const handleUserClick = (username) => {
    fetchUserDetails(username);
  };

  const handleCloseDetails = () => {
    setSelectedUser(null);
  };

  useEffect(() => {
    fetchDefaultUsers();
  }, []);

  return (
    <div className="search-container">
        {/* <div className="search-header">
            
      <h2>GitHub User Search</h2>
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search GitHub users..."
        className="search-input"
      />
      </div> */}
      <div className="search-header">
  <h2 className="text-center text-xl font-bold mb-4">Search People</h2>

  <div className="flex items-center border-2 border-solid border-primary rounded-full h-16 lg:w-2/5 w-full py-2 relative mt-4 mx-auto">
    <input
      type="text"
      value={query}
      onChange={handleInputChange}
      placeholder="Search People..."
      className="bg-transparent h-full w-full border-none outline-none absolute px-20 xl:text-2xl text-base"
    />
    {/* <button className="bg-primary rounded-full text-white w-12 h-12 absolute left-2 border-none">
      <HiSearch className="text-2xl mx-auto" />
    </button> */}
  </div>
</div>

      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}

      {/* User List */}
      <div className="user-list">
        {users.map((user) => (
          <div key={user.id} className="user-card" onClick={() => handleUserClick(user.login)}>
            <img src={user.avatar_url} alt={user.login} className="avatar" />
            <div className="user-details">
              {/* Apply the camel case with spaces transformation */}
              <p><strong>Username:</strong> {toCamelCaseWithSpaces(user.login)}</p>
              <a href={user.html_url} target="_blank" rel="noopener noreferrer">
                View Profile
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* User Details Modal */}
      {selectedUser && (
        <div className="user-details-modal">
          <div className="modal-content">
            <button className="close-button" onClick={handleCloseDetails}>Close</button>
            <img src={selectedUser.avatar_url} alt={selectedUser.login} className="avatar-large" />
            <h2>{selectedUser.name || selectedUser.login}</h2>
            <p><strong>Username:</strong> {selectedUser.login}</p>
            <p><strong>Location:</strong> {selectedUser.location || "N/A"}</p>
            <p><strong>Followers:</strong> {selectedUser.followers}</p>
            <p><strong>Following:</strong> {selectedUser.following}</p>
            <p><strong>Public Repos:</strong> {selectedUser.public_repos}</p>
            <a href={selectedUser.html_url} target="_blank" rel="noopener noreferrer">GitHub Profile</a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;
