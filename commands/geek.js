const fetch = require('node-fetch')
module.exports = {
    name: '?geek',
    description: 'Send an insult',
    execute(msg, args) {
        fetch("https://geek-jokes.sameerkumar.website/api?format=json", {
        })
        .then(res => res.json())
        .then(
            (result) => {
                msg.channel.send(`>>> ${result.joke}`)
            })
    },
};