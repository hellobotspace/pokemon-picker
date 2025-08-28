import { parseOutput } from "./helpers";
import { CommandType } from ".";
import { randomTeam } from "../../pickers/random_team/random_team";
import { createResponseChannelMessage } from "../../discord/message";
import { createContainerWithText } from "../componentsV2/createContainerWithText";

const name = "分隊0";
const description = "隨機分隊";

export const command: CommandType = {
  data: { name, description },
  getResponse: async () => {
    const result = randomTeam();
    const content = parseOutput(description, result);
    const text = createContainerWithText(content).toJSON();
    return createResponseChannelMessage([text]);
  },
};
