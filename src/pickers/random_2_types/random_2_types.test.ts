import { describe, expect, it } from "vitest";
import { PokemonType } from "../data";
import { checkProbabilityValid } from "../../helpers";
import { TypeStats } from "../types";

import { getTypeArrayWithWeight, random2Type } from "./random_2_types";

describe("random_2_types", () => {
  it("random_2_types", async () => {
    const testCount = 20000;
    const probs = getProbabilityEachType();
    let typeStats: TypeStats = {};
    for (const pokType of Object.values(PokemonType)) {
      const expectValuePerType = testCount * 2 * probs[pokType];
      typeStats[pokType] = { pokStats: {}, observed: 0, expected: expectValuePerType };
    }

    for (let i = 0; i < testCount; i++) {
      const twoType = random2Type();
      // check length == 2
      expect(twoType.length).toEqual(2);
      // cal stats
      ++typeStats[twoType[0]].observed;
      ++typeStats[twoType[1]].observed;
    }

    expect(checkProbabilityValid(Object.values(typeStats), 20)).equal(true);
  });
});

export function getProbabilityEachType(): Record<string, number> {
  const types = getTypeArrayWithWeight();
  const typeFeq: Record<string, number> = {};
  for (const type of Object.values(PokemonType)) {
    typeFeq[type] = types.filter((t) => t === type).length;
  }
  const sum = Object.values(typeFeq).reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  const result: Record<string, number> = {};
  for (const [k, v] of Object.entries(typeFeq)) result[k] = v / sum;
  return result;
}
