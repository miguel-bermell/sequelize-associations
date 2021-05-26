const Joi = require("joi");

const updateSchema = Joi.object({
  email: Joi.string().email(),
  password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")).min(4),
  name: Joi.string(),
});

module.exports = { updateSchema };
