const fetch = require('node-fetch')
module.exports = {
    name: '?momma',
    description: 'Send a yo momma joke joke',
    execute(msg, args) {
        fetch("https://api.yomomma.info", {
            headers: {
                'accept': 'application/json'
            }
        })
        .then(res => res.json())
        .then(
            (result) => {
                msg.channel.send(`>>> ${result.joke}`)
            })
    },
};
