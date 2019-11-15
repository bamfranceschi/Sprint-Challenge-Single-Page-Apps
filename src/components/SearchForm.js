import React, { useState, useEffect } from "react";
import CharacterCard from "./CharacterCard";
import styled from "styled-components";

export default function SearchForm(props) {
  const [searchTerm, setSearchTerm] = useState("");

  const [searchResults, setSearchResults] = useState([]);

  const characterList = props.character;

  console.log(characterList);

  const CharDiv2 = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-top: 10%;
    margin-left: 4%;
    margin-right: 4%;
  `;

  useEffect(() => {
    const results = characterList.filter(char =>
      char.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setSearchResults(results);
  }, [characterList, searchTerm]);

  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  return (
    <section className="search-form">
      <form>
        <label htmlFor="search">Search by name:</label>
        <input
          name="search"
          placeholder="search"
          onChange={handleChange}
          value={searchTerm}
        />
      </form>

      <CharDiv2>
        {searchResults.map(person => (
          <CharacterCard
            key={person.id}
            name={person.name}
            status={person.status}
            species={person.species}
            type={person.type}
            gender={person.gender}
          />
        ))}
      </CharDiv2>
    </section>
  );
}
