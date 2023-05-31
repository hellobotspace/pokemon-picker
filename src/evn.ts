const { APPLICATION_ID, BOT_TOKEN, GUILD_ID } = process.env;

if (!APPLICATION_ID || !BOT_TOKEN || !GUILD_ID) throw new Error("missing evn variable");

export const evn = { APPLICATION_ID, BOT_TOKEN, GUILD_ID };

export interface ModuleWorkerEnv {
  APPLICATION_PUBLIC_KEY: string;
}
