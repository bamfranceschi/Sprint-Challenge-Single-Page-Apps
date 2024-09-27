import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import styled from "styled-components";
import SearchForm from "./SearchForm";

const CharDiv = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 10%;
  margin-left: 4%;
  margin-right: 4%;
`;

function filterByTerm(characters, term) {
  if (term === "" || !term) {
    return characters;
  }

  return characters.filter(({ name }) =>
    name.toLowerCase().includes(term.toLowerCase())
  );
}

export default function CharacterList() {
  const [state, setState] = useState({ characterList: [], searchTerm: "" });

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character/")
      .then(response => {
        setState(s => ({ ...s, characterList: response.data.results }));
      })
      .catch(error => {
        console.log("There was an error fetching the data", error);
      });
  }, []);

  const setSearchTerm = ({ target }) => {
    if (target) {
      setState(s => ({ ...s, searchTerm: target.value }));
    }
  };

  const charactersToDisplay = filterByTerm(
    state.characterList,
    state.searchTerm
  );

  return (
    <section className="character-list">
      <SearchForm onSearchTerm={setSearchTerm} searchTerm={state.searchTerm} />

      <CharDiv>
        {charactersToDisplay.map(person => (
          <CharacterCard
            key={person.id}
            name={person.name}
            status={person.status}
            species={person.species}
            type={person.type}
            gender={person.gender}
          />
        ))}
      </CharDiv>
    </section>
  );
}
