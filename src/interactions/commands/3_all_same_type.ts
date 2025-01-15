import { APIInteractionResponseChannelMessageWithSource, InteractionResponseType } from "discord-api-types/v10";
import { parseOutput, poksToTable } from "./helpers";
import { CommandType } from ".";
import { components } from "../components";
import { allSameType } from "../../pickers";

const name = "選角3";
const description = "整隊同類型 (需要全角色模式)";
const picker = allSameType;
const getComponents = () => components.allSameTypeRepickButton.components;

export const command: CommandType = {
  data: { name, description },
  getResponse,
};

export async function getResponse(): Promise<APIInteractionResponseChannelMessageWithSource> {
  const result = picker();
  const content = parseOutput(description, poksToTable(result));
  const needRepick = result.find((pok) => pok.name === "蒼響");
  return {
    type: InteractionResponseType.ChannelMessageWithSource,
    data: {
      tts: false,
      content: content,
      components: needRepick ? getComponents() : [],
    },
  };
}
