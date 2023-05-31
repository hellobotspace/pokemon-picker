import { CommandType } from ".";
import { APIInteractionResponseChannelMessageWithSource, InteractionResponseType } from "discord-api-types/v10";

const name = "help";
const description = "顯示所有指令";
const divider = `\n------------------------------------\n`;
const content = `
${divider}
指令們：
> </分隊:1094688368870314017> -> 隨機分隊
> </選角1:1094688368870314019> -> 隨機10隻
> </選角2:1094688368870314020> -> 隨機5種類型 兩隊鏡像類型
> </選角3:1094688368870314021> -> 整隊同類型
> </隨機2類型:1094688368870314018> -> 隨機2類型
${divider}
客製化機器人私訊<@975769210057793566>
${divider}
`;

export const command: CommandType = {
  data: { name, description, nsfw: false },
  async getResponse(interaction) {
    const res: APIInteractionResponseChannelMessageWithSource = {
      type: InteractionResponseType.ChannelMessageWithSource,
      data: {
        tts: false,
        content,
        components: [],
      },
    };
    return res;
  },
};
