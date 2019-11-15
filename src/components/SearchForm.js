import React, { useState, useEffect } from "react";

export default function SearchForm(props) {
  const [searchTerm, setSearchTerm] = useState("");

  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const results = character.filter(person =>
      person.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  }, [searchTerm]);

  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  return (
    <section className="search-form">
      <form>
        <label htmlFor="search">Search:</label>
        <input name="search" placeholder="search" onChange={handleChange} />
      </form>

      <div>
        <ul>
          {searchResults.map(props.person => (
            <li key={props.person}>{props.person}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
