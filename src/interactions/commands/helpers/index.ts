import { Pokemon } from "../../../pickers/data";

export function parseOutput(title: string, body: string) {
  const result = title + `\n\n` + body + "\n";
  return makeMarkdownCodeblock(result);
}

export function makeMarkdownCodeblock(s: string) {
  return "```css\n" + s + "\n```";
}

export function poksToTable(poks: Pokemon[]) {
  const row1 = poks.slice(0, 5);
  const row2 = poks.slice(5, 10);
  const s1 = row1.map((pok) => pok.abbreviation).join("｜");
  const s2 = row2.map((pok) => pok.abbreviation).join("｜");
  const s3 = poks.map((pok, index) => `${index + 1} -> ${pok.name}`).join("\n");

  let result = [s1, s2, "", s3].join("\n");

  return result;
}
