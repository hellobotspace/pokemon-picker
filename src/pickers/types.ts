import { ChiStat } from "../helpers";

export type PokStats = Record<string, ChiStat>;

export type TypeStat = ChiStat & { pokStats: PokStats };

export type TypeStats = Record<string, TypeStat>;
