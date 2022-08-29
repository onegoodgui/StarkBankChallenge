import Joi from "joi";

export const invoiceSenderSchema = Joi.object({
  interval: Joi.number().positive(),
  limit: Joi.number().positive(),
});
