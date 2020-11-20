module.exports = {
    aliases: ['c', 'cc'],
    minArgs: 1,
    maxArgs: 1,
    run: (message, args, text, client, prefix, instance) => {
        const config = require('../../config.json');
        const cmdlog = require('../../features/commandLog.js');

        const amount = parseInt(args[0]) + 1;
        message.channel.bulkDelete(amount);

        cmdlog.Log(client, message);
    }
};
