# Подключение команд

Создайте директорию, в которой будут располагаться Ваши команды (например, commands).
Путь до неё (относительно файла инициализации бота) необходимо записать в конструкторе бота.

```js
//Например, папка commands находится в одной директории с файлом инициализации бота (index.js)
const bot = new CocosCoreBot({
    commandsDirectory: './commands'
});
```

## Конструктор

Импорт

```js
const { Command } = require('cocoscore');
```

Инициализация команды

```js
new Command(options);
```

## Options

| Опция       | Тип       | Описание                      | По умолчанию |
| ----------- | --------- | ----------------------------- | ------------ |
| trigger     | RegExp    | Триггер команды               | undefined    |
| name        | string    | Имя команды                   | ""           |
| description | string    | Краткое описание команды      | ""           |
| handler     | function  | Обработчик команды            | undefined    |
| emoji       | string    | Эмодзи с обозначением команды | 📔           |
| commands    | Command[] | Подкоманды                    | []           |
| permission  | number    | Права доступа к команде       | 0            |

## Примеры файлов команд

```js
module.exports = new Command({
    trigger: /^тест$/i,
    name: 'тест',
    description: 'проверка работоспособности',
    emoji: '📡',
    handler(ctx) {
        ctx.send('Я в порядке!');
    }
})
```

Важно: module.exports **обязателен**.
Также можно экспортировать массив с командами.

```js
module.exports = [
    new Command({ /* ... */ }),
    new Command({ /* ... */ })
];
```

А также можно объявлять свой класс команды, если в этом есть необходимость.

```js
const { Command } = require('../index');

class TestCommand extends Command {};

module.exports = new TestCommand({ /* ... */ });
```
