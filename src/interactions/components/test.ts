import {
  APIActionRowComponent,
  APIMessageActionRowComponent,
  APIInteractionResponseUpdateMessage,
  ComponentType,
  InteractionResponseType,
  ButtonStyle,
} from "discord-api-types/v10";
import { ComponentInteractionHandlers, DiscordComponents } from ".";

const custom_id = "test";

const handlers: ComponentInteractionHandlers = {
  [custom_id]: async () => {
    const res: APIInteractionResponseUpdateMessage = {
      type: InteractionResponseType.UpdateMessage,
      data: { content: "updated!!", components: [] },
    };
    return res;
  },
};

const components: APIActionRowComponent<APIMessageActionRowComponent>[] = [
  {
    type: ComponentType.ActionRow,
    components: [{ custom_id, label: "Click me!", type: ComponentType.Button, style: ButtonStyle.Primary }],
  },
];

export const testButton: DiscordComponents = { components, handlers };
