const fs = require("fs");
const path = require("path");
const config = require("../config.json");
const { Client, Intents } = require("discord.js");

// Specify the intents you want to use.
// Complete list of intents and their associated events:
// https://discord.com/developers/docs/topics/gateway#list-of-intents
const { GUILDS, GUILD_MESSAGES, GUILD_MEMBERS } = Intents.FLAGS;

const client = new Client({
  intents: [GUILDS, GUILD_MESSAGES, GUILD_MEMBERS],
});

fs.readdirSync(path.resolve(__dirname, "./events"))
  .filter((file) => file.endsWith(".js"))
  .forEach((file) => {
    const eventHandler = require(`./events/${file}`);
    const [eventName] = file.split(".");
    client.on(eventName, eventHandler);
  });

client.login(config.token);
