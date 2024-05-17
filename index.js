require('dotenv').config()
const { WebClient } = require('@slack/web-api');

console.log('Getting started with Node Slack SDK');

console.log('process.env.SLACK_TOKEN: ', process.env.SLACK_TOKEN);

// Create a new instance of the WebClient class with the token read from your environment variable
const web = new WebClient(process.env.SLACK_TOKEN);
// The current date
const currentTime = new Date().toTimeString();

(async() => {

    try {

        const user = await web.users.lookupByEmail({ email: process.env.USER_EMAIL });

        // console.log('user: ', user);

        // Use the `chat.postMessage` method to send a message from this app
        await web.chat.postMessage({
            channel: user.user.id,
            text: `The current time is ${currentTime} 🚀🚀🚀🚀`,
        });
        console.log('Message posted!');
    } catch (error) {
        console.log(error);
    }

})();