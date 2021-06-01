const { Telegraf} =require('telegraf')
const bot=new Telegraf('1872836925:AAFFpr4OBxhQjFz74fJd8UTUnbSUFlnp2u4')

const { array, array2, array3 } = require("./bootstrap")
const { informationOfFr, nameOfFriend, friends } = require("./friends")
const { startKb, chooseNameKb, moodKb, moodKB} = require("./keyboard")

bot.start(ctx => ctx.reply(`Привет, ${ctx.message.from.first_name}`,
    startKb()
))

bot.hears("Привет", ctx => ctx.reply
(array2[Math.floor(Math.random() * array2.length)]
))

bot.hears("Как ты?", ctx => ctx.reply 
    (array[Math.floor(Math.random() * array.length)]
))

bot.hears("Почему?", ctx => ctx.reply
(array3[Math.floor(Math.random() * array3.length)]
))


bot.hears("Выбери имя", ctx => ctx.reply("Выбери имя:", chooseNameKb()))

bot.hears("Назад", ctx => ctx.reply("Ok", startKb()))

bot.hears(friends, ctx => ctx.reply (nameOfFriend(ctx.message.text).join("\n")))

bot.hears("Все друзья", ctx => ctx.reply (Object.values(informationOfFr).join("\n\n").split(",").join("\n")))


console.log("Бот запущен")
bot.launch()