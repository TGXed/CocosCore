# Падключэнне каманд

Стварыце дырэкторыю, у якой будуць размешчаны Вашыя каманды (напрыклад, commands).
Шлях да яе (адносна файла ініцыялізацыі бота) неабходна запісаць у канструктары бота.

```js
//Напрыклад, папка commands знаходзіцца у адной дырэкторыі з файлам ініцыялізацыі боты (index.js)
const bot = new CocosCoreBot({
    commandsDirectory: './commands'
});
```

## Канструктар

Імпарт

```js
const { Command } = require('cocoscore');
```

Ініцыялізацыя каманды

```js
new Command(options);
```

## Options

| Налады      | Тып       | Апісанне                      | Па змоўчанні |
| ----------- | --------- | ----------------------------- | ------------ |
| trigger     | RegExp    | Трыгер каманды                | undefined    |
| name        | string    | Імя каманды                   | ""           |
| description | string    | Кароткае апісанне каманды     | ""           |
| handler     | function  | Апрацоўшчык каманды           | undefined    |
| emoji       | string    | Эмодзі з абазначэннем каманды | 📔           |
| commands    | Command[] | Падкаманды                    | []           |
| permission  | number    | Правы доступу да каманды      | 0            |

## Прыклады файлаў каманд

```js
module.exports = new Command({
    trigger: /^тэст$/i,
    name: 'тэст',
    description: 'праверка працаздольнасці',
    emoji: '📡',
    handler(ctx) {
        ctx.send('Усё добра!');
    }
})
```

Важна: module.exports **абавязковы**.
Таксама можна экспартаваць масіў з камандамі.

```js
module.exports = [
    new Command({ /* ... */ }),
    new Command({ /* ... */ })
];
```

А таксама можна аб'яўляць свой тып каманды, калі ў гэтым ёсць неабходнасць.

```js
const { Command } = require('../index');

class TestCommand extends Command {};

module.exports = new TestCommand({ /* ... */ });
```
