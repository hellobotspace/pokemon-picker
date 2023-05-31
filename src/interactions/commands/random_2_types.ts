import { CommandType } from ".";
import { parseOutput } from "./helpers";
import { random2Type } from "../../pickers/random_2_types/random_2_types";
import { PokemonType } from "../../pickers/data";
import {
  APIApplicationCommandInteraction,
  APIInteractionResponseChannelMessageWithSource,
  InteractionResponseType,
} from "discord-api-types/v10";

const name = "隨機2類型";
const description = "隨機2類型 (可以用Ban角模式)";

export const command: CommandType = {
  data: { name, description },
  async getResponse(
    interaction: APIApplicationCommandInteraction
  ): Promise<APIInteractionResponseChannelMessageWithSource> {
    const types = random2Type();
    const typeStrings: Record<PokemonType, string> = {
      [PokemonType.allRounder]: "平衡",
      [PokemonType.attacker]: "攻擊",
      [PokemonType.defender]: "防禦",
      [PokemonType.supporter]: "輔助",
      [PokemonType.speedster]: "敏捷",
    };
    const result = `${typeStrings[types[0]]} ${typeStrings[types[1]]}`;
    const content = parseOutput(description, result);
    return {
      type: InteractionResponseType.ChannelMessageWithSource,
      data: {
        tts: false,
        content: content,
        embeds: [],
        allowed_mentions: { parse: [] },
      },
    };
  },
};
