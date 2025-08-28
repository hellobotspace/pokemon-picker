import { Pokemon, getTypeToPoksMap, pokemonTypes } from "../data";
import { getRandomInt, randomlyPop } from "../../helpers";

export function fiveTypeMirror(): Pokemon[] {
  var poks = getTypeToPoksMap();

  let result = Array<Pokemon>(10);
  for (let i = 0; i < 5; ) {
    const pokType = pokemonTypes[getRandomInt(5)];
    if (poks[pokType].length < 2) continue;
    result[i] = randomlyPop(poks[pokType]);
    result[i + 5] = randomlyPop(poks[pokType]);
    ++i;
  }

  return result;
}
