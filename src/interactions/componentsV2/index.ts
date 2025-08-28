import { testButtonHandler } from "./test";
import { allSameTypePickTypeButtonsHandlers } from "./allSameTypePickTypeButtons";
import {
  APIInteractionResponseChannelMessageWithSource,
  APIInteractionResponseUpdateMessage,
  APIMessageComponentInteraction,
} from "discord-api-types/v10";

export type DiscordComponentInteractionHandler = {
  customId: string;
  getResponse: (
    interaction: APIMessageComponentInteraction
  ) => APIInteractionResponseChannelMessageWithSource | APIInteractionResponseUpdateMessage;
};

export const componentInteractionHandlers = [testButtonHandler, ...allSameTypePickTypeButtonsHandlers];

const customIdMap: Record<string, string> = {};
for (const handler of componentInteractionHandlers) {
  if (customIdMap[handler.customId]) throw new Error("Duplicate custom id.");
}
