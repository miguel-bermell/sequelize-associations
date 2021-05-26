const HttpError = require("../utils/httpError");

const roleValidation = (role) => {
  const roles = Array.isArray(role) ? role : [role]; // Si se le pasa un string lo convierte a un array y lo guarda en la constante roles.
  return (req, res, next) => {
    if (![...roles, "admin"].includes(req.user?.role)) throw new HttpError(401);
    next();
  };
};

module.exports = roleValidation;

/* 
Support Arrays

const roleValidation = (role) => {
  return (req, res, next) => {
    if (![...role, "admin"].req.user?.role) throw new HttpError(401);
    next();
  };
}; 

*/
