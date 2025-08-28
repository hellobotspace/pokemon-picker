import { Pokemon, pokemons } from "../data";
import { randomlyPop } from "../../helpers";

export function allRandom(): Pokemon[] {
  const poks = [...pokemons]; // clone array
  const result: Pokemon[] = [];

  for (let i = 0; i < 10; ++i) {
    const cur = randomlyPop(poks);
    if (cur) result.push(cur);
  }

  return result;
}
