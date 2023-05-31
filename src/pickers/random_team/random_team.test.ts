import { describe, expect, it } from "vitest";
import { ChiStat, checkProbabilityValid } from "../../helpers";
import { getMovePosition } from "./random_team";

describe("random_team", () => {
  it("getMovePosition", async () => {
    const testCount = 10000;
    const expectValue = (testCount / 10) * 4;

    let moveStats: ChiStat[] = [];
    for (let i = 0; i < 10; ++i) moveStats.push({ observed: 0, expected: expectValue });

    for (let i = 0; i < testCount; i++) {
      const { top, bottom } = getMovePosition();
      // check length equal
      expect(top.length).toEqual(bottom.length);
      // check no duplicates
      const set = new Set(top);
      for (const i of bottom) set.add(i);
      expect(set.size).toEqual(top.length * 2);
      // cal stats
      for (const i of top) ++moveStats[i - 1].observed;
      for (const i of bottom) ++moveStats[i - 1].observed;
    }

    expect(checkProbabilityValid(Object.values(moveStats), 20)).equal(true);
  });
});
