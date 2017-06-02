const Discord = require('discord.js');
const client = new Discord.Client();

client.login('tokenhere');

client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', (message) => {
  if (message.content.startsWith('!cjface') || message.content.startsWith('!facts')) {
      var facts = {
          1: "Did you know that 2ng/3ng and 3ng/4ng are the same thing?",
          2: "That guy was buffed out the DICK!",
          3: "Pasgetti >:[",
          4: "Your retarded",
          5: "Why is my guy keep stopping?",
          6: "CFG....Country Fried Chicken",
          7: "I pooped my ass",
          8: "I can spell escape! E-s-c-a-p-y. I added a y.",
          9: "I'm going to find everyone I am >:[",
          10: "I'm the least wanting to get up person.",
          11: "Dude, make it your facepage.",
          12: "How he didn't die is beyond me.",
          13: "That guy died of death",
          14: "THE FUCKING VAN DOESN'T MAKE SENSE!!",
          15: "I definition didn't shit my pants at hardees...twice..."
      };
      var rand = randomInt(1, Object.keys(facts).length);
    message.channel.send(facts[rand]);
  }
});

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
