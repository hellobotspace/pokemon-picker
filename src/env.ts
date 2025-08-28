const { APPLICATION_ID, BOT_TOKEN, GUILD_ID } = process.env;

if (!APPLICATION_ID || !BOT_TOKEN || !GUILD_ID) throw new Error("missing env variable");

export const env = { APPLICATION_ID, BOT_TOKEN, GUILD_ID };

export interface ModuleWorkerEnv {
  APPLICATION_PUBLIC_KEY: string;
}
