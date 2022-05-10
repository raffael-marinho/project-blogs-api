// const User = require('../models/User');
// const { verifyToken } = require('../token/token');

// async function validToken(req, res, next) {
//   const { authorization } = req.headers;
//   if (!authorization) {
//     return res.status(401).json({ message: 'Token not found' });
//   }

//   try {
//     const { id } = verifyToken(authorization);
//     const user = await User.findByPk(id);
//     if (!user) {
//       return res.status(401).json({ message: 'User not found' });
//     }
//     req.user = user;
//     next();
//   } catch (err) {
//     return res.status(401).json({ message: 'Expired or invalid token' });
//   }
// }

// module.exports = validToken;