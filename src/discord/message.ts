import {
  APIInteractionResponseChannelMessageWithSource,
  APIInteractionResponseUpdateMessage,
  APIMessageTopLevelComponent,
  InteractionResponseType,
  MessageFlags,
} from "discord-api-types/v10";

export function createResponseChannelMessage(
  components?: APIMessageTopLevelComponent[]
): APIInteractionResponseChannelMessageWithSource {
  return {
    type: InteractionResponseType.ChannelMessageWithSource,
    data: {
      flags: MessageFlags.IsComponentsV2,
      tts: false,
      components,
    },
  };
}

export function createResponseUpdateMessage(
  components?: APIMessageTopLevelComponent[]
): APIInteractionResponseUpdateMessage {
  return {
    type: InteractionResponseType.UpdateMessage,
    data: {
      flags: MessageFlags.IsComponentsV2,
      tts: false,
      components,
    },
  };
}
