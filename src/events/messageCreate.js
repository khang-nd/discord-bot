const { Message } = require("discord.js");

/**
 *
 * @param {Message} message
 */
module.exports = (message) => {
  console.log(message.author.tag + ": " + message.content);
};
