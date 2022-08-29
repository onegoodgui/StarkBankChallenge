import { Request, Response, NextFunction } from "express";
import { serviceErrorToStatusCode } from "../utils/errorUtils.js";

export default function errorHandlerMiddleware(
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (err.type) {
    return res.status(serviceErrorToStatusCode[err.type]).send(err.message);
  }

  res.sendStatus(500);
}
