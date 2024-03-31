import PokemonDetail from "@/app/components/PokemonDetail";
import { render, screen } from "@testing-library/react";
import { MockBulbasaur } from "../mocks/MockPokemon";

it("should render and have test text", () => {
  render(<div>Bank</div>);
  expect(screen.getByText("Bank"));
});
