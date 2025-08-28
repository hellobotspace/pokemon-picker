import { describe, expect, it } from "vitest";
import { getTypeToPoksMap } from "../data";
import { checkProbabilityValid } from "../../helpers";
import { TypeStats } from "../types";
import { allSameTypeTwoTeams } from "./all_same_type_two_teams";
import { getProbabilityEachType } from "../random_2_types/random_2_types.test";

describe("all_same_type_two_teams", () => {
  it("all_same_type_two_teams", async () => {
    const testCount = 50000;
    const probs = getProbabilityEachType();
    const poks = getTypeToPoksMap();
    let typeStats: TypeStats = {};
    for (const [pokType, poksByType] of Object.entries(poks)) {
      const expectValuePerType = testCount * probs[pokType];
      const expectValuePerPok = (expectValuePerType * 10) / poksByType.length;
      typeStats[pokType] = { pokStats: {}, observed: 0, expected: expectValuePerType };
      for (const pok of poksByType)
        typeStats[pokType].pokStats[pok.name] = { observed: 0, expected: expectValuePerPok };
    }
    for (let i = 0; i < testCount; i++) {
      const poks = allSameTypeTwoTeams();
      // check length == 10
      expect(poks.length).toEqual(10);
      // check no duplicates
      expect(new Set(poks.map((pok) => pok.name)).size).toEqual(10);
      // check all same type two teams
      for (const pok of poks) expect(pok.type).toEqual(poks[0].type);
      // cal stats
      ++typeStats[poks[0].type].observed;
      for (const pok of poks) ++typeStats[pok.type].pokStats[pok.name].observed;
    }
    expect(checkProbabilityValid(Object.values(typeStats), 20)).equal(true);
    for (const typeStat of Object.values(typeStats)) {
      const pokStats = Object.values(typeStat.pokStats);
      expect(checkProbabilityValid(pokStats, pokStats.length * 5)).equal(true);
    }
  });
});
