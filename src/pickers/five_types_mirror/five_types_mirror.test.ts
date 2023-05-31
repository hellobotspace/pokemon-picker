import { describe, expect, it } from "vitest";
import { getType2Poks } from "../data";
import { checkProbabilityValid } from "../../helpers";
import { TypeStats } from "../types";
import { fiveTypeMirror } from "./five_types_mirror";

describe("five_types_mirror", () => {
  it("five_types_mirror", async () => {
    const testCount = 50000;
    const probs = getProbabilityEachType();
    const poks = getType2Poks();
    let typeStats: TypeStats = {};

    for (const [pokType, poksByType] of Object.entries(poks)) {
      const expectValuePerType = testCount * 10 * probs[pokType];
      const expectValuePerPok = expectValuePerType / poksByType.length;
      typeStats[pokType] = { pokStats: {}, observed: 0, expected: expectValuePerType };
      for (const pok of poksByType)
        typeStats[pokType].pokStats[pok.name] = { observed: 0, expected: expectValuePerPok };
    }

    for (let i = 0; i < testCount; i++) {
      const poks = fiveTypeMirror();
      // check length == 10
      expect(poks.length).toEqual(10);
      // check no duplicates
      expect(new Set(poks.map((pok) => pok.name)).size).toEqual(10);
      // check type is mirror
      for (let i = 0; i < 5; ++i) expect(poks[i].type).toEqual(poks[i + 5].type);
      // cal stats
      for (const pok of poks) {
        ++typeStats[pok.type].observed;
        ++typeStats[pok.type].pokStats[pok.name].observed;
      }
    }
    // console.log(Object.values(typeStats).map((e) => ({ ...e, pokStats: {} })));
    expect(checkProbabilityValid(Object.values(typeStats), 30)).equal(true);
    for (const typeStat of Object.values(typeStats)) {
      const pokStats = Object.values(typeStat.pokStats);
      expect(checkProbabilityValid(pokStats, pokStats.length * 5)).equal(true);
    }
  });
});

function getProbabilityEachType(): Record<string, number> {
  const poks = getType2Poks();
  const typeLimit: Record<string, number> = {};
  for (const [k, v] of Object.entries(poks)) typeLimit[k] = Math.floor(v.length / 2);
  const typeFeqs: Record<string, number> = {};
  for (const k of Object.keys(poks)) typeFeqs[k] = 0;
  dfs(typeLimit, typeFeqs, 0, 1);
  const sum = Object.values(typeFeqs).reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  const result: Record<string, number> = {};
  for (const [k, v] of Object.entries(typeFeqs)) result[k] = v / sum;
  return result;
}

function dfs(typeLimit: Record<string, number>, typeFeqs: Record<string, number>, count: number, curProb: number) {
  if (count === 5) return;
  const countGreaterZero = Object.values(typeLimit).reduce((acc, n) => acc + (n > 0 ? 1 : 0), 0);
  curProb *= 1 / countGreaterZero;
  for (const [type, limit] of Object.entries(typeLimit)) {
    if (limit === 0) continue;
    --typeLimit[type];
    typeFeqs[type] += curProb;
    dfs(typeLimit, typeFeqs, count + 1, curProb);
    ++typeLimit[type];
  }
}
