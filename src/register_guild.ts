import { env } from "./env";
import { REST, Routes } from "discord.js";
import { commands } from "./interactions/commands";

const rest = new REST({ version: "10" }).setToken(env.BOT_TOKEN);

// main

(async () => {
  try {
    console.log("Started refreshing application (/) commands.");

    const body = commands.map((command) => {
      command.data.name = command.data.name + "-test";
      return command.data;
    });

    await rest.put(Routes.applicationGuildCommands(env.APPLICATION_ID, env.GUILD_ID), { body: body });

    console.log("Successfully reloaded application (/) commands.");
  } catch (error) {
    console.error(error);
  }
})();
