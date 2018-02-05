const Sequelize = require('sequelize');
const _conn = new Sequelize(process.env.DATABASE_URL)

const User = _conn.define('user', {
  name: Sequelize.STRING,
  hometown: Sequelize.STRING,
  bio: Sequelize.STRING
});

const sync = ()=> {
  return _conn.sync({ force: true });
};

const seed = ()=> {
  return Promise.all([
    User.create({ name: 'Jacob', hometown: 'Visalia, CA', bio: 'Jacob just really likes to code and fix things. He also likes lifting heavy things'}),
    User.create({ name: 'Steve', hometown: 'Hoboken, NJ', bio: 'Steve loves him some Supreme and turtles'}),
    User.create({ name: 'Frank', hometown: 'Brooklyn, NY', bio: 'Frank loves a nice glass of wine and some good old-fashioned drama!'})
  ])
};


module.exports = {
  sync, 
  seed,
  models: {
    User
  }
}