const Joi = require('joi');

module.exports = {
  validateBody: schema => {
    return (req, res, next) => {
      const result = Joi.validate(req.body, schema);
      if (result.error) {
        return res.status(400).json(result.error);
      }
      //if no value, than create it an init in into emtpy object
      if (!req.value) {
        req.value = {};
      }
      req.value['body'] = result.value;
      //if no next() than here will blocked usersController.signUp
      next();
    };
  },

  schemas: {
    authSchema: Joi.object().keys({
      email: Joi.string()
        .email()
        .required(),
      password: Joi.string().required()
    })
  }
};
