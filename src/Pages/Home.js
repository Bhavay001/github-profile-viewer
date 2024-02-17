import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css'

function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate(`/profile?search=${searchTerm}`);
  };

  const handleEnterKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

return (
    <div className="container">
      <input
        type="text"
        placeholder="Search for usernames"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={handleEnterKeyPress}
        className="search-input"
      />
      <button onClick={handleSearch} className="search-button">
        Search
      </button>
    </div>
  );
}

export default Home;