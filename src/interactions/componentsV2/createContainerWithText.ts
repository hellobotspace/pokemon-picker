import { ContainerBuilder, TextDisplayBuilder } from "@discordjs/builders";

export function createContainerWithText(text: string) {
  return new ContainerBuilder()
    .setAccentColor(0xff0000)
    .addTextDisplayComponents(new TextDisplayBuilder().setContent(text));
}
