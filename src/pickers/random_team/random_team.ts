import { getRandomsWithoutDuplicate } from "../../helpers";

export function randomTeam(): string {
  const { top, bottom } = getMovePosition();
  let result: string = "";
  for (let i = 0; i < top.length; ++i) {
    result += `${top[i]} 跟 ${bottom[i]} 換\n`;
  }
  return result;
}

export function getMovePosition(): { top: number[]; bottom: number[] } {
  const moveCount = 2;
  const top = getRandomsWithoutDuplicate(5, moveCount).map((i) => i + 1);
  const bottom = getRandomsWithoutDuplicate(5, moveCount).map((i) => i + 6);
  return { top, bottom };
}
