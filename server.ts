import {Client, Intents} from "discord.js";

const prefix = "!";

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
            "Hello everyone! I'm the new bot that'll also manage this Discord server. I can help people, make announcements and also ban people (that's probably the most fun thing I can do). Also a thing to keep in mind is that I'm made by @Komerdoor#773."
          );
        }
      }
    }
    */
  });

  client.on("message", async (message) => {
    if (message.author.bot) return;

    if (client.user && message.mentions.has(client.user)) {
      message.channel.send(`Sorry ${message.member?.user}. Do not have much to say yet`);
    }

    if (message.content.startsWith(prefix)) {
      const args = message.content.slice(prefix.length).split(" ");
      const command = args.shift()?.toLowerCase();
      const is_admin = message?.member?.roles?.cache.some((role) => role.name === "Admin");

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
