import { parseOutput, poksToTable } from "./helpers";
import { CommandType } from ".";
import { allRandom } from "../../pickers";
import { createContainerWithText } from "../componentsV2/createContainerWithText";
import { createResponseChannelMessage } from "../../discord/message";

const name = "選角1";
const description = "隨機10隻 (需要全角色模式)";
const picker = allRandom;

export const command: CommandType = {
  data: { name, description },
  getResponse,
};

async function getResponse() {
  const result = picker();
  const content = parseOutput(description, poksToTable(result));
  const text = createContainerWithText(content).toJSON();
  return createResponseChannelMessage([text]);
}
