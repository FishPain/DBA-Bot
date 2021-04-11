module.exports = {
    name: 'sheesh',
    description: 'Well... Sheeeeesh!!!!',
    execute(msg, args) {
        msg.channel.send('YOOOO Sheeeeesh!', {tts: true});
    },
};