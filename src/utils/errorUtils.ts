import { custom } from "joi";

export const serviceErrorToStatusCode = {
  unauthorized: 401,
  notFound: 404,
  conflict: 409,
  unprocessableEntity: 422,
  tooEarly: 425,
};

function unauthorizedError(customMessage?: string) {
  return {
    type: "unauthorized",
    message: customMessage ? customMessage : "Unautohrized",
  };
}

function conflictError(customMessage?: string) {
  return {
    type: "conflict",
    message: customMessage ? customMessage : "Conflict",
  };
}

function notFoundError(customMessage?: string) {
  return {
    type: "notFound",
    message: customMessage ? customMessage : "Not found",
  };
}

function unprocessableEntityError(customMessage?: string) {
  return {
    type: "unprocessableEntity",
    message: customMessage ? customMessage : "Unprocessable Entity",
  };
}

function tooEarly(customMessage?: string) {
  return {
    type: "tooEarly",
    message: customMessage ? customMessage : "Too Early",
  };
}

export const errorTypes = {
  unauthorizedError,
  conflictError,
  notFoundError,
  unprocessableEntityError,
  tooEarly,
};
