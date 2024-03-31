import { Pokemon } from "@/app/components/PokemonDetail";

export const MockBulbasaur: Pokemon = {
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
};

export const MockCharmander: Pokemon = {
  name: "Charmander",
  id: "UG9rZW1vbjowMDQ=",
  weight: {
    minimum: "7.44kg",
    maximum: "9.56kg",
  },
  height: {
    minimum: "0.53m",
    maximum: "0.68m",
  },
  classification: "Lizard Pokémon",
  types: ["Fire"],
  resistant: ["Fire", "Grass", "Ice", "Bug", "Steel", "Fairy"],
  attacks: {
    fast: [
      {
        name: "Ember",
        type: "Fire",
        damage: 10,
      },
      {
        name: "Scratch",
        type: "Normal",
        damage: 6,
      },
    ],
    special: [
      {
        name: "Flame Burst",
        type: "Fire",
        damage: 30,
      },
      {
        name: "Flame Charge",
        type: "Fire",
        damage: 25,
      },
      {
        name: "Flamethrower",
        type: "Fire",
        damage: 55,
      },
    ],
  },
  weaknesses: ["Water", "Ground", "Rock"],
  fleeRate: 0.1,
  maxCP: 841,
  evolutions: [
    {
      id: "UG9rZW1vbjowMDU=",
      number: "005",
      name: "Charmeleon",
      types: ["Fire"],
      image: "https://img.pokemondb.net/artwork/charmeleon.jpg",
      attacks: {
        fast: [
          {
            name: "Ember",
            type: "Fire",
            damage: 10,
          },
          {
            name: "Scratch",
            type: "Normal",
            damage: 6,
          },
        ],
        special: [
          {
            name: "Fire Punch",
            type: "Fire",
            damage: 40,
          },
          {
            name: "Flame Burst",
            type: "Fire",
            damage: 30,
          },
          {
            name: "Flamethrower",
            type: "Fire",
            damage: 55,
          },
        ],
      },
    },
    {
      id: "UG9rZW1vbjowMDY=",
      number: "006",
      name: "Charizard",
      types: ["Fire", "Flying"],
      image: "https://img.pokemondb.net/artwork/charizard.jpg",
      attacks: {
        fast: [
          {
            name: "Ember",
            type: "Fire",
            damage: 10,
          },
          {
            name: "Wing Attack",
            type: "Flying",
            damage: 9,
          },
        ],
        special: [
          {
            name: "Dragon Claw",
            type: "Dragon",
            damage: 35,
          },
          {
            name: "Fire Blast",
            type: "Fire",
            damage: 100,
          },
          {
            name: "Flamethrower",
            type: "Fire",
            damage: 55,
          },
        ],
      },
    },
  ],
  evolutionRequirements: {
    amount: 25,
    name: "Charmander candies",
  },
  image: "https://img.pokemondb.net/artwork/charmander.jpg",
  maxHP: 955,
};

export const MockSquirtle: Pokemon = {
  name: "Squirtle",
  id: "UG9rZW1vbjowMDc=",
  weight: {
    minimum: "7.88kg",
    maximum: "10.13kg",
  },
  height: {
    minimum: "0.44m",
    maximum: "0.56m",
  },
  classification: "Tiny Turtle Pokémon",
  types: ["Water"],
  resistant: ["Fire", "Water", "Ice", "Steel"],
  attacks: {
    fast: [
      {
        name: "Bubble",
        type: "Water",
        damage: 25,
      },
      {
        name: "Tackle",
        type: "Normal",
        damage: 12,
      },
    ],
    special: [
      {
        name: "Aqua Jet",
        type: "Water",
        damage: 25,
      },
      {
        name: "Aqua Tail",
        type: "Water",
        damage: 45,
      },
      {
        name: "Water Pulse",
        type: "Water",
        damage: 35,
      },
    ],
  },
  weaknesses: ["Electric", "Grass"],
  fleeRate: 0.1,
  maxCP: 891,
  evolutions: [
    {
      id: "UG9rZW1vbjowMDg=",
      number: "008",
      name: "Wartortle",
      types: ["Water"],
      image: "https://img.pokemondb.net/artwork/wartortle.jpg",
      attacks: {
        fast: [
          {
            name: "Bite",
            type: "Dark",
            damage: 6,
          },
          {
            name: "Water Gun",
            type: "Water",
            damage: 6,
          },
        ],
        special: [
          {
            name: "Aqua Jet",
            type: "Water",
            damage: 25,
          },
          {
            name: "Gunk Shot",
            type: "Poison",
            damage: 65,
          },
          {
            name: "Hydro Pump",
            type: "Water",
            damage: 90,
          },
          {
            name: "Ice Beam",
            type: "Ice",
            damage: 65,
          },
        ],
      },
    },
    {
      id: "UG9rZW1vbjowMDk=",
      number: "009",
      name: "Blastoise",
      types: ["Water"],
      image: "https://img.pokemondb.net/artwork/blastoise.jpg",
      attacks: {
        fast: [
          {
            name: "Bite",
            type: "Dark",
            damage: 6,
          },
          {
            name: "Water Gun",
            type: "Water",
            damage: 6,
          },
        ],
        special: [
          {
            name: "Flash Cannon",
            type: "Steel",
            damage: 60,
          },
          {
            name: "Gunk Shot",
            type: "Poison",
            damage: 65,
          },
          {
            name: "Hydro Pump",
            type: "Water",
            damage: 90,
          },
          {
            name: "Ice Beam",
            type: "Ice",
            damage: 65,
          },
        ],
      },
    },
  ],
  evolutionRequirements: {
    amount: 25,
    name: "Squirtle candies",
  },
  image: "https://img.pokemondb.net/artwork/squirtle.jpg",
  maxHP: 1008,
};
