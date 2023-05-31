import { PokemonType, getType2Poks } from "../data";
import { getRandomsWithoutDuplicate } from "../../helpers";

export function random2Type(): PokemonType[] {
  const types = getTypeArrayWithWeight();
  return getRandomsWithoutDuplicate(types.length, 2).map((i) => types[i]);
}

export function getTypeArrayWithWeight(): PokemonType[] {
  const poks = getType2Poks();
  const types: PokemonType[] = [];
  for (const [t, ps] of Object.entries(poks)) {
    const num = Math.floor(ps.length / 6);
    types.push(...Array<PokemonType>(num).fill(t as PokemonType));
  }
  return types;
}
