const { Command, Utils } = require('../index');

class BallCommand extends Command {}

module.exports = new BallCommand({
    trigger: /^шар(?:\s+(.*)|$)/i,
    name: 'шар',
    description: 'шар судьбы',
    emoji: '🔮',
    handler(ctx) {
         /*
         ctx.body при вводе команды "шар" выглядит так:
         ['шар', undefined, index: 0, groups: undefined]

         также можно использовать группы, тогда триггер изменится на /^шар(?:\s+(?<text>.*)|$)/i
         ctx.body будет выглядеть так:
         ['шар', undefined, index: 0, groups: { text: undefined }]
         это упрощает проверку аргументов:
         if (!ctx.body.groups.text) return ctx.error('введите вместе с командой вопрос, который хотите задать магическому шару.');
         */
        if (!ctx.body[1]) return ctx.error('введите вместе с командой вопрос, который хотите задать магическому шару.');

        let phrases = ['возможно.', 'да.', 'определённо -- да.', 'нет.', 'скорее да, чем нет', 'забудь об этом.', 'туманный ответ, попробуй ещё.', 'даже не думай.', 'я думаю, да', 'думаю, нет.', 'лучше пока не знать об этом.', 'ты шутишь?', 'ни в коем случае.', 'быть может.', '100% да.', 'скорее нет, чем да'];

        ctx.send(Utils.getRandomElement(phrases));
    }
});
