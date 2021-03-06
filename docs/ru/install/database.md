# Подключение БД

В качестве БД в CocosCore используется MongoDB.

По умолчанию используются модели пользователя и чата, однако Вы можете установить свои модели или отредактировать используемые по умолчанию.

> Наличие mongoURI в конструкторе бота **обязательно** для работы БД. Также все модели должны быть добавлены и отредактированы **до** старта бота (bot.start())

MongoURI выглядит следующим образом:

```js
'mongodb://username:password@host:port/database?options...'
```

Подробнее о том, за что отвечает каждый компонент URI, можно прочитать [здесь](https://docs.mongodb.com/manual/reference/connection-string/).

Примеры MongoURI:

```js
'mongodb://mongodb0.example.com:27017/admin'
'mongodb://myDBReader:D1fficultP%40ssw0rd@mongodb0.example.com:27017/admin'
```

## Установка моделей

```js
bot.db.setModel(rawName, rawSchema);
```

| Опция     | Тип    | Описание                  |
| --------- | ------ | ------------------------- |
| rawName   | string | Имя модели                |
| rawSchema | object | Объект, описывающий схему |

### Редактирование моделей по умолчанию

```js
bot.db.setModel('user', rawUserSchema);

bot.db.setModel('chat', rawChatSchema);
```

| Опция         | Тип    | Описание                               |
| ------------- | ------ | -------------------------------------- |
| rawUserSchema | object | Объект, описывающий схему пользователя |
| rawChatSchema | object | Объект, описывающий схему чата         |

#### Обязательные поля моделей

Для модели user необходимыми полями являются nickname, vkId и ban, также желательны поля mention и regDate.
Для модели chat необходимым полем является id.

```js
const userSchema = {
    vkId: Number,
    nickname: String,
    ban: {
        type: Boolean,
        default: false
    }
};

const сhatSchema = {
    id: Number
};

bot.db.setModel('user', userSchema);

bot.db.setModel('chat', сhatSchema);
```

## Подключение к БД

Подключение к БД происходит автоматически при инициализации бота. Для загрузки базовых моделей необходим метод start:

```js
bot.start();
```
