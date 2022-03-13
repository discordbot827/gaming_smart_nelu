const reqEvent = (event) => require(`../events/${event}`);
module.exports = client => {
  client.on('message', reqEvent('message'));
};
//== BEERCODE (https://discord.gg/NvFmzB5EfV) BEERCODE ==\\
