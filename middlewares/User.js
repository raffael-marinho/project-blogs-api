// function validateName(req, res, next) {
//   const { displayName } = req.body;
//   if (displayName.length < 8) {
//     return res.status(400).json({
//       message: '"displayName" length must be at least 8 characters long' });
//   }
//   next();
// }

// function validateEmail(req, res, next) {
//   const { email } = req.body;
//   const emailRegex = /\S+@\S+\.\w{2,3}/;
//   if (email === undefined) {
//     return res.status(400).json({ message: '"email" is required' });
//   }

//   if (email === '') {
//     return res.status(400).json({ message: '"email" is not allowed to be empty' });
//   }

//   if (emailRegex.test(email) === false) {
//     return res.status(400).json({ message: '"email" must be a valid email' });
//   }

//   next();
// }

// function validatePassword(req, res, next) {
//   const { password } = req.body;
//   if (password === undefined) {
//     return res.status(400).json({ message: '"password" is required' });
//   }

//   if (password === '') {
//     return res.status(400).json({ message: '"password" is not allowed to be empty' });
//   }

//   if (password.length < 6) {
//     return res.status(400).json({
//       message: '"password" length must be 6 characters long' });
//   }

//   next();
// }

// module.exports = {
//   validateName,
//   validateEmail,
//   validatePassword,
// };