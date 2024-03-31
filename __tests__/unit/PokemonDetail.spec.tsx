import { render, screen } from "@testing-library/react";
import {
  MockBulbasaur,
  MockCharmander,
  MockSquirtle,
} from "../mocks/MockPokemon";
import PokemonDetailCard from "@/app/components/PokemonDetailCard";

describe("check Pokemon type", () => {
  it("should render Information of 'Bulbasaur' and have 'Grass' type text", () => {
    render(<PokemonDetailCard pokemon={MockBulbasaur} />);
    expect(screen.getByTestId("p_type_0")).toHaveTextContent("Grass");
  });

  it("should render Information of 'Charmander' and have 'Fire' type text", () => {
    render(<PokemonDetailCard pokemon={MockCharmander} />);
    expect(screen.getByTestId("p_type_0")).toHaveTextContent("Fire");
  });

  it("should render Information of 'Squirtle' and have 'Water' type text", () => {
    render(<PokemonDetailCard pokemon={MockSquirtle} />);
    expect(screen.getByTestId("p_type_0")).toHaveTextContent("Water");
  });
});
