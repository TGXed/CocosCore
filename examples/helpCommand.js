const { Command } = require('../index');

module.exports = new Command({
    trigger: /^пом[ао]щь?$/i,
    name: 'помощь',
    description: 'список команд бота',
    emoji: '📜',
    handler(ctx, bot) {
        let commands = bot.commander.commands
        .filter(command => command.name !== undefined)
        .map(x => `${x.emoji} ${x.name} -- ${x.description}`)
        .join('\n');

        ctx.send(`Список команд бота:\n\n${commands}`, {
            emoji: '📜'
        })
    }
});