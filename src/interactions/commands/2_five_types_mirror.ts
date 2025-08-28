import { parseOutput, poksToTable } from "./helpers";
import { CommandType } from ".";
import { fiveTypeMirror } from "../../pickers";
import { createContainerWithText } from "../componentsV2/createContainerWithText";
import { createResponseChannelMessage } from "../../discord/message";

const name = "選角2";
const description = "每隊5類型各一隻 (需要全角色模式)";
const picker = fiveTypeMirror;

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
