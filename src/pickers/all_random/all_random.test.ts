import { describe, expect, it } from "vitest";
import { pokemons } from "../data";
import { ChiStat, checkProbabilityValid } from "../../helpers";
import { allRandom } from "./all_random";

describe("all random", () => {
  it("all random", async () => {
    const testCount = 10000;
    const expectValue = (testCount * 10) / pokemons.length;

    let pokStats: Record<string, ChiStat> = {};
    for (const pok of pokemons) pokStats[pok.name] = { observed: 0, expected: expectValue };

    for (let i = 0; i < testCount; i++) {
      const poks = allRandom();
      // check length == 10
      expect(poks.length).toEqual(10);
      // check no duplicates
      expect(new Set(poks.map((pok) => pok.name)).size).toEqual(10);
      for (const pok of poks) ++pokStats[pok.name].observed;
    }

    expect(checkProbabilityValid(Object.values(pokStats))).equal(true);
  });
});
