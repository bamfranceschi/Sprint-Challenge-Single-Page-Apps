import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  padding-top: 2%;
  padding-bottom: 2%;
`;

export default function Header() {
  return (
    <header className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      <StyledNav>
        <NavLink exact to="/" activeClassName="activeNavButton">
          Welcome
        </NavLink>
        <NavLink exact to="/character-list" activeClassName="activeNavButton">
          Characters
        </NavLink>
      </StyledNav>
    </header>
  );
}
