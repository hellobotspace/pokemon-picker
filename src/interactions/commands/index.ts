import {
  APIApplicationCommandInteraction,
  APIInteractionResponse,
  RESTPostAPIChatInputApplicationCommandsJSONBody,
} from "discord-api-types/v10";
import { test } from "./test";
import { command as random_team } from "./0_random_team";
import { command as random_2_types } from "./random_2_types";
import { command as all_random } from "./1_all_random";
import { command as five_types_mirror } from "./2_five_types_mirror";
import { command as all_same_type } from "./3_all_same_type";
import { command as all_same_type_two_teams } from "./4_all_same_type_two_teams";
import { command as all_eevee } from "./5_eevee";
import { command as help } from "./help";

export interface CommandType {
  data: RESTPostAPIChatInputApplicationCommandsJSONBody;
  getResponse: (interaction: APIApplicationCommandInteraction) => Promise<APIInteractionResponse>;
}

export const commands: CommandType[] = [
  //
  // help,
  test,
  random_team,
  random_2_types,
  all_random,
  five_types_mirror,
  all_same_type,
  all_same_type_two_teams,
  all_eevee,
];
