import {
  APIApplicationCommandInteraction,
  APIInteractionResponseChannelMessageWithSource,
  RESTPostAPIChatInputApplicationCommandsJSONBody,
} from "discord-api-types/v10";
import { test } from "./test";
import { command as randomTeam } from "./random_team";
import { command as random_2_types } from "./random_2_types";
import { command as all_random } from "./1_all_random";
import { command as five_types_mirror } from "./2_five_types_mirror";
import { command as all_same_type } from "./3_all_same_type";
import { command as help } from "./help";

export interface CommandType {
  data: RESTPostAPIChatInputApplicationCommandsJSONBody;
  getResponse: (
    interaction: APIApplicationCommandInteraction
  ) => Promise<APIInteractionResponseChannelMessageWithSource>;
}

export const commands: CommandType[] = [
  //
  help,
  test,
  randomTeam,
  random_2_types,
  all_random,
  five_types_mirror,
  all_same_type,
];
