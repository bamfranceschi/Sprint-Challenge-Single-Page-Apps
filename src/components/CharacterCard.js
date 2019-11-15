import React from "react";
import styled from "styled-components";

const CardDiv = styled.div`
  width: 300px;
  max-height: 200px;
  background-color: white;
  margin: 20px;
  filter: drop-shadow(-20px 10px 10px darkgrey);
  border-radius: 6px;
  padding: 2%;
`;

export default function CharacterCard(props) {
  return (
    <CardDiv>
      <h3>Name: {props.name}</h3>
      <h5>Status: {props.status}</h5>
      <p>Species: {props.species}</p>
      <p>Gender: {props.gender}</p>
    </CardDiv>
  );
}
