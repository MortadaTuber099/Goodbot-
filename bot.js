
const http = require('http');

const express = require('express');

const app = express();

app.get("/", (request, response) => {

  response.sendStatus(200);

});

app.listen(process.env.PORT);

setInterval(() => {

  http.get(`https://wezoo.glitch.me`);

}, 280000);

 

// كل البكجات الي ممكن تحتجها في اي بوت

const Discord = require("discord.js");

var { Util } = require('discord.js');

const {TOKEN, YT, prefix, devs} = require('./config.js')

const bot = new Discord.Client();

const canvas = require("canvas");

const Canvas = require("canvas");

const convert = require("hh-mm-ss")

const fetchVideoInfo = require("youtube-info");

const botversion = require('./package.json').version;

const simpleytapi = require('simple-youtube-api')

const moment = require("moment");

const fs = require('fs');

const util = require("util")

const gif = require("gif-search");

const opus = require("node-opus");

const ms = require("ms");

const jimp = require("jimp");

const { get } = require('snekfetch');

const guild = require('guild');

const dateFormat = require('dateformat');//npm i dateformat

const YouTube = require('simple-youtube-api');

const youtube = new YouTube('AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8');

const hastebins = require('hastebin-gen');

const getYoutubeID = require('get-youtube-id');

const yt = "AIzaSyDeoIH0u1e72AtfpwSKKOSy3IPp2UHzqi4";

const pretty = require("pretty-ms");

const queue = new Map();

var table = require('table').table

bot.login(TOKEN);

bot.on('ready', () => {

  console.log(`

    - This Bot is Online.

    - Logged in **${bot.user.tag}**.

    - All Codes Working.

`);

});
