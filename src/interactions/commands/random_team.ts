import { CommandType } from ".";
import { randomTeam } from "../../pickers/random_team/random_team";
import { parseOutput } from "./helpers";
import {
  APIApplicationCommandInteraction,
  APIInteractionResponseChannelMessageWithSource,
  InteractionResponseType,
} from "discord-api-types/v10";

const name = "分隊";
const description = "隨機分隊";

export const command: CommandType = {
  data: { name, description },
  async getResponse(
    interaction: APIApplicationCommandInteraction
  ): Promise<APIInteractionResponseChannelMessageWithSource> {
    const result = randomTeam();
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
