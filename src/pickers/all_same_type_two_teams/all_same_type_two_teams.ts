import { Pokemon, PokemonType, getTypeToPoksMap } from "../data";
import { randomlyPop } from "../../helpers";
import { random2Type } from "../random_2_types/random_2_types";

export function allSameTypeTwoTeams(pokemonType?: PokemonType): Pokemon[] {
  const type = pokemonType ?? random2Type()[0];
  const poks = getTypeToPoksMap()[type];
  const result: Pokemon[] = [];
  for (let i = 0; i < 10; ++i) {
    result.push(randomlyPop(poks));
  }
  return result;
}
