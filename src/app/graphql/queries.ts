import { gql } from "@apollo/client";

export const listPokemon = (limit: number) => gql`
  query listPokemon {
    query {
      pokemons(first: ${limit}) {
        name
        id
        image
        types
        attacks {
          fast {
            name
            type
            damage
          }
          special {
            name
            type
            damage
          }
        }
      }
    }
  }
`;

export const queryBySearchBar = (PokemonName: string) => gql`
  query getPokemon {
    query {
      pokemon(name: "${PokemonName}") {
        name
        id
        image
        types
        attacks {
          fast {
            name
            type
            damage
          }
          special {
            name
            type
            damage
          }
        }
      }
    }
  }
`;

export const queryBySuggestion = gql`
  query listPokemon {
    query {
      pokemons(first: 151) {
        name
      }
    }
  }
`;
