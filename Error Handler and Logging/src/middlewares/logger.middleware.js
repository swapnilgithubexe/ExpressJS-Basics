// Please don't change the pre-written code
// Import the necessary modules here
import winston from "winston";

export const logger = winston.createLogger({
  // Write your code here
  level: 'error',
  format: winston.format.json(),
  transports: [new winston.transports.File({ filename: "error.log" })]
});

export const loggerMiddleware = async (err, req, res, next) => {
  const logData = `${new Date().toString()}  req URL: ${req.url} error msg: ${err.message}`
  logger.error(logData);
  next();
}
