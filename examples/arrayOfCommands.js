const { Command, Utils } = require('../index');

module.exports = [
    new Command({
        trigger: /^инфа(?:\s+(.*)|$)/i,
        name: 'инфа',
        description: 'вероятность события',
        emoji: 'ℹ',
        handler(ctx) {
            ctx.send(`Вероятность -- ${Utils.getRandomInRange(0, 100)}%`);
        }
    }),
    new Command({
        trigger: /^тест(?:\s+(.*)|$)/i,
        name: 'тест',
        description: 'проверка работоспособности',
        emoji: '📡',
        handler(ctx) {
            ctx.send('Я в порядке!');
        },
        commands: [
            new Command({
                trigger: /^тост$/i,
                handler(ctx) {
                    ctx.send('тост');
                }
            })
        ]
    })
];
