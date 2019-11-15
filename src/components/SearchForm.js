import React, { useState, useEffect } from "react";

export default function SearchForm(props) {
  const [searchTerm, setSearchTerm] = useState("");

  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const results = props.character.filter(person =>
      person.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  }, [searchTerm]);

  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  console.log(character);

  return (
    <section className="search-form">
      <form>
        <label htmlFor="search">Search:</label>
        <input
          name="search"
          placeholder="search"
          onChange={handleChange}
          value={searchTerm}
        />
      </form>

      <div>
        <ul>
          {searchResults.map(person => (
            <li key={person}>{person}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
