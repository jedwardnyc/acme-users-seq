const Sequelize = require('sequelize');
const _conn = new Sequelize(process.env.DATABASE_URL)

const User = _conn.define('user', {
  name: Sequelize.STRING,
  hometown: Sequelize.STRING,
  bio: Sequelize.STRING,
  picture: Sequelize.STRING
});

const sync = ()=> {
  return _conn.sync({ force: true });
};

const seed = ()=> {
  return Promise.all([
    User.create({ name: 'Jacob', hometown: 'Visalia, CA', bio: 'Jacob just really likes to code and fix things. He also likes lifting heavy things', picture: '/images/jacob.jpg'}),
    User.create({ name: 'Steve' }),
    User.create({ name: 'Frank' })
  ])
};

module.exports = {
  sync, 
  seed,
  models: {
    User
  }
}