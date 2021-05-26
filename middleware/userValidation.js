const HttpError = require("../utils/httpError");

const userValidation = (req, res, next) => {
  if (!["user", "admin"].includes(req.user?.role)) throw new HttpError(401); // la ? se utiliza para saber si el objeto existe, si existe accedes a la propiedad en este caso .role
  next();
};

module.exports = userValidation;
