import { describe, expect, it } from "vitest";
import { getType2Poks } from "../data";
import { checkProbabilityValid } from "../../helpers";
import { TypeStats } from "../types";
import { allSameType } from "./all_same_type";
import { getProbabilityEachType } from "../random_2_types/random_2_types.test";

describe("all_same_type", () => {
  it("all_same_type", async () => {
    const testCount = 50000;
    const probs = getProbabilityEachType();
    const poks = getType2Poks();
    let typeStats: TypeStats = {};

    for (const [pokType, poksByType] of Object.entries(poks)) {
      const expectValuePerType = testCount * 2 * probs[pokType];
      const expectValuePerPok = (expectValuePerType * 5) / poksByType.length;
      typeStats[pokType] = { pokStats: {}, observed: 0, expected: expectValuePerType };
      for (const pok of poksByType)
        typeStats[pokType].pokStats[pok.name] = { observed: 0, expected: expectValuePerPok };
    }

    for (let i = 0; i < testCount; i++) {
      const poks = allSameType();
      // check length == 10
      expect(poks.length).toEqual(10);
      // check no duplicates
      expect(new Set(poks.map((pok) => pok.name)).size).toEqual(10);
      // check all same type

      // cal stats
      ++typeStats[poks[0].type].observed;
      ++typeStats[poks[5].type].observed;
      for (const pok of poks) {
        ++typeStats[pok.type].pokStats[pok.name].observed;
      }
    }
    // console.log(Object.values(typeStats).map((e) => ({ ...e, pokStats: {} })));
    expect(checkProbabilityValid(Object.values(typeStats), 20)).equal(true);
    for (const typeStat of Object.values(typeStats)) {
      const pokStats = Object.values(typeStat.pokStats);
      expect(checkProbabilityValid(pokStats, pokStats.length * 5)).equal(true);
    }
  });
});
