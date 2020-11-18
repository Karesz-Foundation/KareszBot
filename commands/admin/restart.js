module.exports = {
    aliases: [],
    minArgs: 0,
    maxArgs: -1,
    run: (message, args, text, client, prefix, instance) => {
        const config = require('../../config.json');
        const log = require('../../features/commandLog.js');
        if (message.author.id == config.owner.id) {
            process.exit();
        }

        log.CommandLog(client, message);
    }
}
