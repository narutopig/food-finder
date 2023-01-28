"use client";

import React, { useState } from "react";
import { NextPageContext } from "next";
import "./searchbar.module.css";

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(`Search term: ${searchTerm}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleChange}
      />
      <button type="submit">Search</button>
    </form>
  );
}

SearchBar.getInitialProps = async (_: NextPageContext) => {
  return { placeholder: "" };
};

export default SearchBar;
