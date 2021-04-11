const fetch = require('node-fetch')
module.exports = {
    name: '?joke',
    description: 'Send a dad joke',
    execute(msg, args) {
        fetch("https://icanhazdadjoke.com/", {
            headers: {
                'accept': 'application/json'
            }
        })
        .then(res => res.json())
        .then(
            (result) => {
                msg.channel.send(result.joke)
            })
    },
};