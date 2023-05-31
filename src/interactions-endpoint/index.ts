import { checkRequestSignature } from "./auth";
import { ModuleWorkerEnv } from "../evn";
import { JsonResponse } from "./JsonResponse";
import { commands } from "../interactions/commands";
import {
  APIApplicationCommandInteraction,
  InteractionResponseType,
  InteractionType,
  APIInteraction,
} from "discord-api-types/v10";
import { handleMessageComponentInteraction } from "./componentHandler";

// export for cloudflare workers
export default {
  async fetch(request: Request, env: ModuleWorkerEnv) {
    return handleRequest(request, env);
  },
};

async function handleRequest(request: Request, env: ModuleWorkerEnv): Promise<Response> {
  // check is a post request
  if (request.method !== "POST") return new Response("Not Found.", { status: 404 });

  // check is post from discord
  const isValidRequest = await checkRequestSignature(request, env);
  if (!isValidRequest) return new Response("Bad request signature.", { status: 401 });

  // handle request
  const interaction: APIInteraction = await request.json();
  return handleInteraction(interaction);
}

async function handleInteraction(interaction: APIInteraction) {
  switch (interaction.type) {
    case InteractionType.Ping: // The `PING` message is used during the initial webhook handshake, and is required to configure the webhook in the developer portal.
      console.log("Handling Ping request");
      return new JsonResponse({ type: InteractionResponseType.Pong });
    case InteractionType.ApplicationCommand: // custom command
      return handleApplicationCommandInteraction(interaction);
    case InteractionType.MessageComponent: // components
      return handleMessageComponentInteraction(interaction);
    default:
      console.error("Unknown Type");
      return new JsonResponse({ error: "Unknown Type" }, { status: 400 });
  }
}

async function handleApplicationCommandInteraction(interaction: APIApplicationCommandInteraction): Promise<Response> {
  console.log("Handling Application Command request");

  const command = commands.find((c) => c.data.name === interaction.data.name);

  // check command is undefined
  if (!command) {
    return new JsonResponse({
      type: InteractionResponseType.ChannelMessageWithSource,
      data: {
        content: "undefined command",
      },
    });
  }

  const res = await command.getResponse(interaction);
  return new JsonResponse(res);
}
