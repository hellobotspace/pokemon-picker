import { describe, expect, it } from "vitest";
import { eevees } from "../data";
import { ChiStat, checkProbabilityValid } from "../../helpers";
import { allEevee } from "./5_eevee";

describe("5_eevee", () => {
  it("5_eevee", async () => {
    const testCount = 10000;
    const expectValue = (testCount * 10) / eevees.length;

    let pokStats: Record<string, ChiStat> = {};
    for (const pok of eevees) pokStats[pok.name] = { observed: 0, expected: expectValue };

    for (let i = 0; i < testCount; i++) {
      const poks = allEevee();
      // check length == 10
      expect(poks.length).toEqual(10);
      // check no duplicates
      expect(new Set(poks.slice(0, 5).map((pok) => pok.name)).size).toEqual(5);
      expect(new Set(poks.slice(5, 10).map((pok) => pok.name)).size).toEqual(5);
      // cal state
      for (const pok of poks) ++pokStats[pok.name].observed;
    }
    expect(checkProbabilityValid(Object.values(pokStats))).equal(true);
  });
});
