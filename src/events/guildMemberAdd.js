const { GuildMember } = require("discord.js");

/**
 * 
 * @param {GuildMember} member 
 */
module.exports = (member) => {
  console.log(member.user.tag + " joined the server");
};
