import { CommandType } from ".";
import { APIInteractionResponseChannelMessageWithSource, InteractionResponseType } from "discord-api-types/v10";
import { components } from "../components";

const name = "test";
const description = "This is for test.";
const content = "test!!! 7";

export const test: CommandType = {
  data: { name, description, nsfw: true },
  async getResponse(interaction) {
    const res: APIInteractionResponseChannelMessageWithSource = {
      type: InteractionResponseType.ChannelMessageWithSource,
      data: {
        tts: false,
        content,
        components: components.testButton.components,
      },
    };
    return res;
  },
};
