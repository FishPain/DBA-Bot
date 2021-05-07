// const fs = require('fs')
module.exports = {
    name: '7.1',
    description: 'All around youu youu youuuu',
    async execute(msg, args) {
        if (msg.member.voice.channel) {
            const connection = await msg.member.voice.channel.join()
            // Create a dispatcher
            const dispatcher = connection.play('media/7.1_Dolby.mp3');

            dispatcher.on('start', () => {
                msg.channel.send('>>> All around youuuuuuuuuuuuuuuuuuuuu')
            });

            dispatcher.on('finish', () =>   {
                connection.disconnect();
            });
            // Always remember to handle errors appropriately!
            dispatcher.on('error', console.error);

        }
        else{
            msg.channel.send('>>> No one in the channel!');
        }

    },
};
