import { evn } from "./evn";
import { REST, Routes } from "discord.js";
import { commands } from "./interactions/commands";

const rest = new REST({ version: "10" }).setToken(evn.BOT_TOKEN);

// main

(async () => {
  try {
    console.log("Started refreshing application (/) commands.");

    const body = commands.map((command) => {
      command.data.description = "--- test --- " + command.data.description;
      return command.data;
    });

    await rest.put(Routes.applicationGuildCommands(evn.APPLICATION_ID, evn.GUILD_ID), { body: body });

    console.log("Successfully reloaded application (/) commands.");
  } catch (error) {
    console.error(error);
  }
})();
