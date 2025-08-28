import { parseOutput, poksToTable } from "./helpers";
import { CommandType } from ".";
import { allEevee } from "../../pickers/5_eevee/5_eevee";
import { createContainerWithText } from "../componentsV2/createContainerWithText";
import { createResponseChannelMessage } from "../../discord/message";

const name = "選角5";
const description = "10個伊步 (需要全角色模式)";

export const command: CommandType = {
  data: { name, description },
  getResponse,
};

async function getResponse() {
  const result = allEevee();
  const content = parseOutput(description, poksToTable(result));
  const text = createContainerWithText(content).toJSON();
  return createResponseChannelMessage([text]);
}
