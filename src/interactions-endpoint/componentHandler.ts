import { InteractionResponseType, APIMessageComponentInteraction } from "discord-api-types/v10";
import { JsonResponse } from "./JsonResponse";
import { componentInteractionHandlers } from "../interactions/componentsV2";

export async function handleMessageComponentInteraction(
  interaction: APIMessageComponentInteraction
): Promise<Response> {
  console.log("Handling MessageComponenttInteraction request");
  for (const handler of componentInteractionHandlers) {
    if (handler.customId !== interaction.data.custom_id) continue;
    const res = handler.getResponse(interaction);
    return new JsonResponse(res);
  }
  return new JsonResponse({
    type: InteractionResponseType.ChannelMessageWithSource,
    data: { content: "這個壞掉了" },
  });
}
