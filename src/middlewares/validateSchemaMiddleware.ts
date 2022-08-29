import { ObjectSchema } from "joi";
import { Request, Response, NextFunction } from "express";
import { errorTypes } from "../utils/errorUtils.js";

export function validateSchemaMiddleware(schema: ObjectSchema) {
  return (req: Request, res: Response, next: NextFunction) => {
    const validation = schema.validate(req.body);
    if (validation.error) {
      throw errorTypes.unprocessableEntityError(validation.error.message);
    }
    next();
  };
}
