import { ButtonStyle } from "discord-api-types/v10";
import { DiscordComponentInteractionHandler } from ".";
import { pokemonTypes, pokemonTypeStrings } from "../../pickers/data";
import { ActionRowBuilder, ButtonBuilder, TextDisplayBuilder } from "@discordjs/builders";
import { allSameTypeTwoTeams } from "../../pickers/all_same_type_two_teams/all_same_type_two_teams";
import { parseOutput, poksToTable } from "../commands/helpers";
import { command } from "../commands/4_all_same_type_two_teams";
import { createResponseUpdateMessage } from "../../discord/message";
import { createContainerWithText } from "./createContainerWithText";

export function allSameTypePickTypeButtons(): ActionRowBuilder<ButtonBuilder> {
  const buttons = pokemonTypes.map((pokemonType) => {
    return new ButtonBuilder()
      .setCustomId(pokemonType)
      .setLabel(pokemonTypeStrings[pokemonType])
      .setStyle(ButtonStyle.Danger);
  });
  return new ActionRowBuilder<ButtonBuilder>().addComponents(buttons);
}

export const allSameTypePickTypeButtonsHandlers: DiscordComponentInteractionHandler[] = pokemonTypes.map(
  (pokemonType) => {
    return {
      customId: pokemonType,
      getResponse: (interaction) => {
        const result = allSameTypeTwoTeams(pokemonType);
        const content = parseOutput(command.data.description, poksToTable(result));
        const text = createContainerWithText(content).toJSON();
        return createResponseUpdateMessage([text]);
      },
    };
  }
);
