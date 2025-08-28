import { ButtonStyle } from "discord-api-types/v10";
import { DiscordComponentInteractionHandler } from ".";
import { createResponseChannelMessage } from "../../discord/message";
import { makeMarkdownCodeblock } from "../commands/helpers";
import { ActionRowBuilder, ButtonBuilder, TextDisplayBuilder } from "@discordjs/builders";

const custom_id = "test";

export const testButton = new ActionRowBuilder<ButtonBuilder>()
  .addComponents(new ButtonBuilder().setCustomId(custom_id).setLabel("Click me!").setStyle(ButtonStyle.Primary))
  .toJSON();

export const testButtonHandler: DiscordComponentInteractionHandler = {
  customId: "test",
  getResponse: (interaction) => {
    return createResponseChannelMessage([
      new TextDisplayBuilder().setContent(makeMarkdownCodeblock(JSON.stringify(interaction, null, 2))).toJSON(),
    ]);
  },
};
