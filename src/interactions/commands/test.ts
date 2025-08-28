import { APIInteractionResponseChannelMessageWithSource, InteractionResponseType } from "discord-api-types/v10";
import { CommandType } from ".";
import { allSameTypePickTypeButtons } from "../componentsV2/allSameTypePickTypeButtons";

const name = "test";
const description = "This is for test.";
const content = "test!!! 7";

export const test: CommandType = {
  data: { name, description, nsfw: true },
  getResponse: async function (interaction) {
    const buttons = allSameTypePickTypeButtons().toJSON();
    const res: APIInteractionResponseChannelMessageWithSource = {
      type: InteractionResponseType.ChannelMessageWithSource,
      data: {
        tts: false,
        components: [buttons],
      },
    };
    return res;
  },
};
