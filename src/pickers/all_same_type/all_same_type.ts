import { Pokemon, getTypeToPoksMap } from "../data";
import { randomlyPop } from "../../helpers";
import { random2Type } from "../random_2_types/random_2_types";

export function allSameType(): Pokemon[] {
  const types = random2Type();
  const poks = getTypeToPoksMap();
  const result: Pokemon[] = [];
  for (let i = 0; i < 10; ++i) {
    const type = types[Math.floor(i / 5)];
    result.push(randomlyPop(poks[type]));
  }
  return result;
}
