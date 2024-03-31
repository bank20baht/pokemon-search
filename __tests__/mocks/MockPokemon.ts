export const MockBulbasaur = {
  pokemon: {
    name: "Bulbasaur",
    id: "UG9rZW1vbjowMDE=",
    weight: {
      minimum: "6.04kg",
      maximum: "7.76kg",
    },
    height: {
      minimum: "0.61m",
      maximum: "0.79m",
    },
    classification: "Seed Pokémon",
    types: ["Grass", "Poison"],
    resistant: ["Water", "Electric", "Grass", "Fighting", "Fairy"],
    attacks: {
      fast: [
        {
          name: "Tackle",
          type: "Normal",
          damage: 12,
        },
        {
          name: "Vine Whip",
          type: "Grass",
          damage: 7,
        },
      ],
      special: [
        {
          name: "Power Whip",
          type: "Grass",
          damage: 70,
        },
        {
          name: "Seed Bomb",
          type: "Grass",
          damage: 40,
        },
        {
          name: "Sludge Bomb",
          type: "Poison",
          damage: 55,
        },
      ],
    },
    weaknesses: ["Fire", "Ice", "Flying", "Psychic"],
    fleeRate: 0.1,
    maxCP: 951,
    evolutions: [
      {
        id: "UG9rZW1vbjowMDI=",
        number: "002",
        name: "Ivysaur",
        types: ["Grass", "Poison"],
        image: "https://img.pokemondb.net/artwork/ivysaur.jpg",
        attacks: {
          fast: [
            {
              name: "Razor Leaf",
              type: "Grass",
              damage: 15,
            },
            {
              name: "Vine Whip",
              type: "Grass",
              damage: 7,
            },
          ],
          special: [
            {
              name: "Power Whip",
              type: "Grass",
              damage: 70,
            },
            {
              name: "Sludge Bomb",
              type: "Poison",
              damage: 55,
            },
            {
              name: "Solar Beam",
              type: "Grass",
              damage: 120,
            },
          ],
        },
      },
      {
        id: "UG9rZW1vbjowMDM=",
        number: "003",
        name: "Venusaur",
        types: ["Grass", "Poison"],
        image: "https://img.pokemondb.net/artwork/venusaur.jpg",
        attacks: {
          fast: [
            {
              name: "Razor Leaf",
              type: "Grass",
              damage: 15,
            },
            {
              name: "Vine Whip",
              type: "Grass",
              damage: 7,
            },
          ],
          special: [
            {
              name: "Petal Blizzard",
              type: "Grass",
              damage: 65,
            },
            {
              name: "Sludge Bomb",
              type: "Poison",
              damage: 55,
            },
            {
              name: "Solar Beam",
              type: "Grass",
              damage: 120,
            },
          ],
        },
      },
    ],
    evolutionRequirements: {
      amount: 25,
      name: "Bulbasaur candies",
    },
    image: "https://img.pokemondb.net/artwork/bulbasaur.jpg",
    maxHP: 1071,
  },
};

export const MockCharmander = {
  pokemon: {
    name: "Charmander",
    id: "UG9rZW1vbjowMDQ=",
    image: "https://img.pokemondb.net/artwork/charmander.jpg",
    types: ["Fire"],
  },
};

export const MockSquirtle = {
  pokemon: {
    name: "Squirtle",
    id: "UG9rZW1vbjowMDc=",
    image: "https://img.pokemondb.net/artwork/squirtle.jpg",
    types: ["Water"],
  },
};
