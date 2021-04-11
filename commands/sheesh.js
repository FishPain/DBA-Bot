// const fs = require('fs')
module.exports = {
    name: 'sheesh',
    description: 'Well... Sheeeeesh!!!!',
    async execute(msg, args) {
        msg.channel.send('YOOOO Sheeeeesh!')
        if (msg.member.voice.channel) {
            const connection = await msg.member.voice.channel.join()
            // Create a dispatcher
            const dispatcher = connection.play('media/Sheesh.mp3');

            dispatcher.on('start', () => {
                console.log('sheesh is now playing!');
            });

            dispatcher.on('finish', () =>   {
                console.log('sheesh has finished playing!');
                connection.disconnect();
            });
            // Always remember to handle errors appropriately!
            dispatcher.on('error', console.error);

        }
        else{
            msg.channel.send('No one in the channel!');
        }

    },
};