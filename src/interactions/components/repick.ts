import {
  APIActionRowComponent,
  APIMessageActionRowComponent,
  ComponentType,
  InteractionResponseType,
  ButtonStyle,
} from "discord-api-types/v10";
import { ComponentInteractionHandlers, DiscordComponents } from ".";
import { command, getResponse } from "../commands/1_all_random";
import { command as command2, getResponse as getResponse2 } from "../commands/2_five_types_mirror";
import { command as command3, getResponse as getResponse3 } from "../commands/3_all_same_type";

export const allRandomRepickButton: DiscordComponents = {
  components: createComponents(command.data.name),
  handlers: createHandlers(command.data.name, getResponse),
};

export const fiveTypeRepickButton: DiscordComponents = {
  components: createComponents(command2.data.name),
  handlers: createHandlers(command2.data.name, getResponse2),
};

export const allSameTypeRepickButton: DiscordComponents = {
  components: createComponents(command3.data.name),
  handlers: createHandlers(command3.data.name, getResponse3),
};

function createHandlers(custom_id: string, handler: typeof getResponse): ComponentInteractionHandlers {
  return {
    [custom_id]: async () => {
      const res = await handler();
      return { type: InteractionResponseType.UpdateMessage, data: res.data };
    },
  };
}

function createComponents(custom_id: string): APIActionRowComponent<APIMessageActionRowComponent>[] {
  return [
    {
      type: ComponentType.ActionRow,
      components: [{ custom_id, label: "馬ㄉ蒼響 重抽", type: ComponentType.Button, style: ButtonStyle.Danger }],
    },
  ];
}
