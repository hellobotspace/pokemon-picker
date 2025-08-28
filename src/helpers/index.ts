// @ts-ignore
import { jStat } from "jstat";

export function randomlyPop<T>(arr: T[]): T {
  if (arr.length === 0) throw new Error("randomlyPop(): length === 0");
  const index = getRandomInt(arr.length);
  const result = arr[index];
  arr[index] = arr[arr.length - 1];
  arr.pop();
  return result;
}

export function getRandomsWithoutDuplicate(max: number, count: number): number[] {
  if (count > max) throw new Error("getRandomsWithoutDuplicate(): count > max");
  const arr = [];
  for (let i = 0; i < max; ++i) arr.push(i);
  const result: number[] = [];
  for (let i = 0; i < count; ++i) {
    const index = getRandomInt(arr.length);
    result.push(arr[index]);
    arr[index] = arr[arr.length - 1];
    arr.pop();
  }
  return result;
}

export function getRandoms(max: number, count: number): number[] {
  const result: number[] = [];
  for (let i = 0; i < count; ++i) result.push(getRandomInt(max));
  return result;
}

export function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}

export interface ChiStat {
  observed: number;
  expected: number;
}

export function checkProbabilityValid(stats: ChiStat[], degreesOfFreedom: number | undefined = undefined): boolean {
  let chiSquare = 0;
  for (const stat of stats) chiSquare += (stat.observed - stat.expected) ** 2 / stat.expected;
  const invChiSquare = getInvChiSquared(0.05, degreesOfFreedom || stats.length - 1);
  // if (chiSquare >= invChiSquare) console.log(chiSquare, invChiSquare);
  console.log(chiSquare, invChiSquare, "chiSquare < invChiSquare", chiSquare < invChiSquare);
  return chiSquare < invChiSquare;
}

function getInvChiSquared(probability: number, degreesOfFreedom: number) {
  return jStat.chisquare.inv(1 - probability, degreesOfFreedom);
}
