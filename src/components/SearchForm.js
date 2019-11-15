import React from "react";

export default function SearchForm({ searchTerm, onSearchTerm }) {
  return (
    <section className="search-form">
      <form>
        <label htmlFor="search">Search by name:</label>
        <input
          name="search"
          placeholder="search"
          onChange={onSearchTerm}
          value={searchTerm}
        />
      </form>
    </section>
  );
}
