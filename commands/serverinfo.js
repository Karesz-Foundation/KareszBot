module.exports = {
    aliases: ['info'],
    minArgs: 0,
    maxArgs: -1,
    run: (message, args, text, client, prefix, instance) => {
        const config = require('../config.json');
        const Discord = require('discord.js');
        const { guild } = message

        const embed = {
            title: guild.name,
            description: `A server by ${guild.owner.user.tag}`,
            thumbnail: {
                url: guild.iconURL()
            },
            fields: [
                {name: 'Created at', value: guild.createdAt},
                {name: `${message.author.tag} joined at`, value: guild.joinedAt},
                {name: 'Members', value: guild.memberCount},
                {name: 'Nitro boost level', value: guild.premiumTier}
            ],
            timestamp: new Date(),
            footer: {
                text: message.author.tag
            }
        }
        message.channel.send({embed: embed})
        console.log(guild);

        client.guilds.cache.get(config.testServer).channels.cache.get(config.logChannel).send(`<@${message.member.id}> ran: ${message.content}`)
    }
}
