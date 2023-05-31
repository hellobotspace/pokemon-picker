import {
  APIActionRowComponent,
  APIMessageActionRowComponent,
  APIMessageComponentInteraction,
} from "discord-api-types/v10";
import { testButton } from "./test";
import { allRandomRepickButton, fiveTypeRepickButton, allSameTypeRepickButton } from "./repick";

type ComponentInteractionHandler = (interaction: APIMessageComponentInteraction) => Promise<any>;

export type ComponentInteractionHandlers = Record<string, ComponentInteractionHandler | undefined>;
export interface DiscordComponents {
  components: APIActionRowComponent<APIMessageActionRowComponent>[];
  handlers: ComponentInteractionHandlers;
}

export const components = { testButton, allRandomRepickButton, fiveTypeRepickButton, allSameTypeRepickButton };
