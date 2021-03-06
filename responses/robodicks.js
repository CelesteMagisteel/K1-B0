module.exports = {
    // List of Keywords/Phrases that will trigger the response. Should be in lowercase.
    triggers: [ "do robots have dicks" ],
    // Chance out of 100 that the response will trigger. 100 means that it will always trigger.
    chance: 100,
    // Priority of the trigger. If you have 2 responses that have the same trigger, the lower value priority will be used first.
    priority: 0,
    // Code to execute when the response is triggered.
    execute(message) {
        return message.channel.send('', {
            files: [appRoot + "/assets/images/k1b0blush.png"]
        }).catch(err => console.error(err));
    },
};