import { env } from "./env";
import { REST, Routes } from "discord.js";
import { commands } from "./interactions/commands";

const rest = new REST({ version: "10" }).setToken(env.BOT_TOKEN);

// main

(async () => {
  try {
    console.log("Started refreshing application (/) commands.");
    console.log("----------------");
    console.log("Commands:");
    const body = commands.map((command) => {
      console.log(command.data.name, command.data.nsfw ? "  (nsfw)" : "");
      return command.data;
    });
    console.log("----------------");
    await rest.put(Routes.applicationCommands(env.APPLICATION_ID), { body: body });

    console.log("Successfully reloaded application (/) commands.");
  } catch (error) {
    console.error(error);
  }
})();
