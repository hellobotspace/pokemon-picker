import { InteractionResponseType, APIMessageComponentInteraction } from "discord-api-types/v10";
import { ComponentInteractionHandlers, components } from "../interactions/components";
import { JsonResponse } from "./JsonResponse";

const handlers: ComponentInteractionHandlers = {};
for (const component of Object.values(components)) {
  Object.assign(handlers, component.handlers);
}

export async function handleMessageComponentInteraction(
  interaction: APIMessageComponentInteraction
): Promise<Response> {
  console.log("Handling MessageComponenttInteraction request");
  const handler = handlers[interaction.data.custom_id];
  if (!handler) {
    return new JsonResponse({
      type: InteractionResponseType.ChannelMessageWithSource,
      data: { content: "undefined component" },
    });
  }
  const res = await handler(interaction);
  return new JsonResponse(res);
}
