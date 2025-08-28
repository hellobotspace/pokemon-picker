import { eevees, Pokemon } from "../data";
import { randomlyPop } from "../../helpers";

export function allEevee(): Pokemon[] {
  return [...get5Eevee(), ...get5Eevee()];
}

function get5Eevee() {
  const poks = [...eevees]; // clone
  const result: Pokemon[] = [];
  for (let i = 0; i < 5; ++i) {
    const cur = randomlyPop(poks);
    if (cur) result.push(cur);
  }
  return result;
}
