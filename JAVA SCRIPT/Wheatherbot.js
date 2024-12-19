const request = require('request');

const TelegramBot = require('node-telegram-bot-api');

const token = '8182607707:AAHwNhi7ThkdvYIYape3KKl904Af9bZ4Y7Y';

const bot = new TelegramBot(token, {polling: true});

bot.on('message',(msg)=>{
    m=msg.text
    if(m.toString()=='/start'){
        bot.sendMessage(msg.chat.id,"Hello,I am a Whether bot, Please Enter your Location name : ")
    }
    
    else{
        request('http://api.weatherapi.com/v1/current.json?key=2043a6156cdb47d295f184448241712&q='+msg.text+'&aqi=yes', function (error, response, body){
            if(JSON.parse(body).error){
                bot.sendMessage(msg.chat.id, "Data not found")
            }
            else{
                bot.sendMessage(msg.chat.id, "Location "+JSON.parse(body).location.name)
                bot.sendMessage(msg.chat.id, "Wheather "+JSON.parse(body).current.condition.text)
                bot.sendMessage(msg.chat.id, "Temp "+JSON.parse(body).current.temp_c)
                bot.sendMessage(msg.chat.id, "Humidity "+JSON.parse(body).current.humidity)
            }
        
        })
    }
})
