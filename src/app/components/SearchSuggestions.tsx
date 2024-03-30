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
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [openModal, setOpenModal] = useState<boolean>(false);

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

  const toggleModal = () => {
    setOpenModal(!openModal);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setSearchTerm(suggestion);
    toggleModal();
    setSuggestions([]);
  };

  return (
    <div style={{ position: "relative" }}>
      <input
        type="text"
        value={searchTerm}
        onChange={onSearchChange}
        autoComplete="off"
        id="pokemonName"
        placeholder="Charizard, Pikachu, etc."
        className="px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
      />
      {suggestions.length > 0 && (
        <ul
          style={{
            position: "absolute",
            zIndex: 999,
            top: "100%",
            backgroundColor: "#fff",
            border: "1px solid #ccc",
            borderRadius: "4px",
            marginTop: "4px",
            minWidth: "100%",
          }}
        >
          {suggestions.map((suggestion, index) => (
            <li
              key={index}
              onClick={() => handleSuggestionClick(suggestion)}
              style={{ padding: "8px", cursor: "pointer" }}
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchComponent;
