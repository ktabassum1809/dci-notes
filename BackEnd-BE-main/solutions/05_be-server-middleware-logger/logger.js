import { appendToLogFile } from "./helpers.js";

export function logger(req, res, next) {
  const data = `${req.ip} | ${req.method} | ${req.originalUrl}`;

  appendToLogFile(data);

  next();
}
