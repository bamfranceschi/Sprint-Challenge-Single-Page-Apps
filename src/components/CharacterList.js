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

export default function CharacterList() {
  const [character, setCharacter] = useState([]);

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character/")
      .then(response => {
        setCharacter(response.data.results);
      })
      .catch(error => {
        console.log("There was an error fetching the data", error);
      });
  }, [setCharacter]);

  return (
    <section className="character-list">
      <CharDiv>
        <SearchForm character={character} />
      </CharDiv>

      {/* <CharDiv>
        {character.map(person => (
          <CharacterCard
            key={person.id}
            name={person.name}
            status={person.status}
            species={person.species}
            type={person.type}
            gender={person.gender}
          />
        ))}
      </CharDiv> */}
    </section>
  );
}
