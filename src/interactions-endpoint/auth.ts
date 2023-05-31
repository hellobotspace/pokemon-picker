import { verifyKey } from "discord-interactions";
import { ModuleWorkerEnv } from "../evn";

export async function checkRequestSignature(request: Request, env: ModuleWorkerEnv) {
  // Using the incoming headers, verify this request actually came from discord.
  const signature = request.headers.get("x-signature-ed25519") || "";
  const timestamp = request.headers.get("x-signature-timestamp") || "";
  const body = await request.clone().arrayBuffer();
  const isValidRequest = verifyKey(body, signature, timestamp, env.APPLICATION_PUBLIC_KEY);
  return isValidRequest;
}
