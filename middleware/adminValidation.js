const HttpError = require("../utils/httpError");

const adminValidation = (req, res, next) => {
  if (req.user?.role !== "admin") throw new HttpError(401); // la ? se utiliza para saber si el objeto existe, si existe accedes a la propiedad en este caso .role
  next();
};

module.exports = adminValidation;
