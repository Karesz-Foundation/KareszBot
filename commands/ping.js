module.exports = {
    aliases: [],
    run: (message, args, text, client, prefix, instance) => {
        const config = require('../config.json');
        const cmdlog = require('../features/commandLog.js');
        message.channel.send(`🏓  ${Date.now()-message.createdTimestamp}ms`);

        cmdlog.Log(client, message);
    }
}
