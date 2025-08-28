import { parseOutput } from "./helpers";
import { CommandType } from ".";
import { random2Type } from "../../pickers/random_2_types/random_2_types";
import { pokemonTypeStrings } from "../../pickers/data";
import { createContainerWithText } from "../componentsV2/createContainerWithText";
import { createResponseChannelMessage } from "../../discord/message";

const name = "隨機2類型";
const description = "隨機2類型 (可以用Ban角模式)";

export const command: CommandType = {
  data: { name, description },
  getResponse: async () => {
    const types = random2Type();
    const result = `${pokemonTypeStrings[types[0]]} ${pokemonTypeStrings[types[1]]}`;
    const content = parseOutput(description, result);
    const text = createContainerWithText(content).toJSON();
    return createResponseChannelMessage([text]);
  },
};
