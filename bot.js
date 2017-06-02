const Discord = require('discord.js');
const client = new Discord.Client();

client.login('tokenhere');

client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', (message) => {
  if (message.content.startsWith('!cjface')) {
      var facts = {
          1: "Did you know that 2ng/3ng and 3ng/4ng are the same thing?",
          2: "That guy was buffed out the DICK!"
      };
      var rand = randomInt(1, 2);
    message.channel.send(facts[rand]);
  }
});

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
