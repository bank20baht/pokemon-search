import React, { useState } from "react";

interface Pokemon {
  name: string;
}

interface Query {
  pokemons: Pokemon[];
}

interface Data {
  query: Query;
}

interface Props {
  pokemons: Data;
}

const SearchComponent: React.FC<Props> = ({ pokemons }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const suggestionsList = pokemons.query.pokemons.map((pokemon) =>
    pokemon.name.toLowerCase()
  );

  const onSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchTerm(value);
    if (!value) {
      setSuggestions([]);
      return;
    }
    const filteredSuggestions = suggestionsList.filter((suggestion) =>
      suggestion.toLowerCase().startsWith(value.toLowerCase())
    );
    setSuggestions(filteredSuggestions);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={onSearchChange}
      />
      {suggestions.length > 0 && (
        <ul>
          {suggestions.map((suggestion, index) => (
            <li key={index}>{suggestion}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchComponent;
