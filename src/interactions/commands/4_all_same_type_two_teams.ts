import { parseOutput, poksToTable } from "./helpers";
import { CommandType } from ".";
import { allSameTypeTwoTeams } from "../../pickers";
import { allSameTypePickTypeButtons } from "../componentsV2/allSameTypePickTypeButtons";
import { createContainerWithText } from "../componentsV2/createContainerWithText";
import { createResponseChannelMessage } from "../../discord/message";

const name = "選角4";
const description = "隨機1類型 10個同類型 (需要全角色模式)";

export const command: CommandType = {
  data: { name, description },
  getResponse,
};

async function getResponse() {
  const result = allSameTypeTwoTeams();
  const content = parseOutput(description, poksToTable(result));
  const text = createContainerWithText(content).toJSON();
  const buttons = allSameTypePickTypeButtons().toJSON();
  return createResponseChannelMessage([text, buttons]);
}
