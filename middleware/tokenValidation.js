const { validateToken } = require("../services/jwtService");

const tokenValidation = (req, res, next) => {
  if (req.headers.authorization) {
    const token = req.headers.authorization.slice(7);
    const { id, email, role } = validateToken(token); //solo cogemos los datos que nos interesan
    req.user = { id, email, role }; // al objeto req. le agregamos la propiedad user
  }
  next();
};

module.exports = tokenValidation;
