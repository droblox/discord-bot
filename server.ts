import {Client, Intents} from "discord.js";

const prefix = "!";

const commands = [
  {
    name: "ping",
    description: "Replies with Pong!",
  },
];

async function start() {
  const client = new Client({
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_MESSAGES],
  });

  client.once("ready", () => {
    console.log("Bot online");
    /*
    const guilds = client.guilds.cache;
    for (const [id, guild] of guilds) {
      const channels = guild.channels.cache;
      for (const [id, channel] of channels) {
        if (channel.isText() && channel.name.toLowerCase().includes("announcements")) {
          channel.send(
            "Hello everyone! I'm back."
          );
        }
      }
    }
    */
  });

  client.on("interaction", async (interaction) => {
    if (!interaction.isCommand()) return;
    if (interaction.commandName === "ping") {
      //await interaction.reply({content: "Pong!", ephemeral: true});
      await interaction.reply({content: `Pong`, ephemeral: true});
    }
  });

  client.on("message", async (message) => {
    if (message.author.bot) return;
    if (!client.application?.owner) await client.application?.fetch();

    if (client.user && message.mentions.has(client.user)) {
      message.channel.send(`Sorry ${message.member?.user}. Do not have much to say yet`);
    }

    if (message.content.startsWith(prefix)) {
      const args = message.content.slice(prefix.length).split(" ");
      const command = args.shift()?.toLowerCase();
      const is_admin = message?.member?.roles?.cache.some((role) => role.name === "Admin");

      if (is_admin && command === "deploy" && message.author.id === client.application?.owner?.id) {
        console.log(`Registering commands on guild ${message.guild?.id}`);
        if (message.guild?.id) {
          const result_global = await client.application.commands.set([]);
          console.log(result_global);
          const result_guild = await client.guilds.cache
            .get(message.guild?.id)
            ?.commands.set(commands);
          console.log(result_guild);
        }
      }

      if (is_admin && command === "despam") {
        console.log(message.member?.user.username, is_admin, command);
        message.channel.send("Banning spam users...");
        const members = await message.guild?.members.fetch();
        if (members) {
          const spam_members = [];
          for (const [id, member] of members) {
            if (member.displayName.toLowerCase().includes("h0nde")) {
              spam_members.push(member.displayName);
              member.ban();
            }
          }
          message.channel.send("```" + spam_members.join("\n") + "```");
        }
      }
    }
  });

  await client.login(process.env.API_KEY);
}

start();
