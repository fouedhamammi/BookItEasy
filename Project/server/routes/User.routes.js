const isAuth = require('../middlwares/isAuth');

const {
  Register,
  GetAllUsers,
  Login,
  GetConnectedUser,
} = require('../controller/User.controller');

module.exports = (app) => {
  app.post('/api/users', Register);
  app.post('/api/login', Login);
  app.get('/api/users', GetAllUsers);
  app.get('/api/user', isAuth, GetConnectedUser);
};
