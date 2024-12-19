const request = require('request');

const TelegramBot = require('node-telegram-bot-api');

const token = '7536280291:AAGg6L6FlfmSyE6Hm0nS_-qi0p4ipbz2lTw';

const bot = new TelegramBot(token, {polling: true});

bot.on('message',(msg)=>{
    m=msg.text
    if(m.toString()=='/start'){
        bot.sendMessage(msg.chat.id,"Hello,I am a Movie bot, Please Enter a movie name : ")
    }
    else{
        request('http://www.omdbapi.com/?t='+msg.text+'&apikey=deda0725', function (error, response, body){
            if(JSON.parse(body).response=="False"){
                bot.sendMessage(msg.chat.id, "Data not found")
            }
            else{
                bot.sendMessage(msg.chat.id, "Title : "+JSON.parse(body).Title)
                bot.sendMessage(msg.chat.id, "Date : "+JSON.parse(body).Released)
                bot.sendMessage(msg.chat.id, "Rating : "+JSON.parse(body).imdbRating)
                bot.sendMessage(msg.chat.id, "Language : "+JSON.parse(body).Language)
                bot.sendMessage(msg.chat.id,'Poster : '+JSON.parse(body).Poster)
                bot.sendMessage(msg.chat.id,'Genre :'+JSON.parse(body).Genre)
                bot.sendMessage(msg.chat.id,'Actors :'+JSON.parse(body).Actors)
            }
    })
    }

})
