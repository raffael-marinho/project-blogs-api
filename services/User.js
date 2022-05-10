// const User = require('../models/User');
// const { tokenGenerator } = require('../token/token');

// async function addUser(displayName, email, password, image) {
//   const emailVerify = await User.findOne({ where: { email } });
//   console.log(emailVerify);
//   if (emailVerify) {
//     throw new Error('User already registered');
//   }
//   const user = await User.create({ displayName, email, password, image });

//   return user;
// }

// async function login(email, password) {
//   const user = await User.findOne({ where: { email } });
//   if (!user || password !== user.password) {
//     throw new Error('Invalid fields');
//   }
//   const token = tokenGenerator(user.id);
//   return token;
// }

// async function getAllUsers() {
//   const users = await User.findAll();
//   return users;
// }

// async function getUserById(id) {
//   const user = await User.findByPk(id);
//   if (!user) {
//     throw new Error('User does not exist');
//   }
//   return user;
// }

// module.exports = {
//   addUser,
//   login,
//   getAllUsers,
//   getUserById,
// };