const {Markup} = require("telegraf")
module.exports.startKb = () => 
    Markup
        .keyboard([
            ["Привет", "Как ты?", "Почему?","Все друзья"], 
            [ "Выбери имя"]
        ])
        .resize()
module.exports.chooseNameKb = () => 
    Markup
        .keyboard([
            ["Aidai","Jamka", "Bermet"],
            [ "Nursultan",  "Назад"]
        ])
        .resize()