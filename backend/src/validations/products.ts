import Joi from 'joi';

const userSchema = Joi.object({
  productName: Joi.string().alphanum().min(3).max(30).required(),
  price: Joi.number().precision(2).positive().required(),
  stock: Joi.number().required(),
});

export default userSchema;
