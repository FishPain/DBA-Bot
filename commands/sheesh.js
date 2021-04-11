module.exports = {
    name: '?imh',
    description: 'Call Us!',
    execute(msg, args) {
      msg.channel.send('Please call +65 6389 2000');
      console.log(args)
    },
  };