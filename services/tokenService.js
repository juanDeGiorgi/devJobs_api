require('dotenv').config();
const jwt = require('jsonwebtoken');

module.exports.tokenGenerator = async (data) => {
  const user = {
    id: data.id,
    name: data.name,
    lastName: data.lastName,
    email: data.email,
  };
  const token = jwt.sign(user, process.env.JWT_SECRET);

  if (!token) {
    const error = new Error('invalid');
    error.status = 404;
    throw error;
  }
  return token;
};
