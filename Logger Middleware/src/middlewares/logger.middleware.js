// Please don't change the pre-written code
// Import the necessary modules here
import fs from 'fs';
const fsPromise = fs.promises;

const log = (logData) => {
  try {
    logData = `\n ${new Date().toString()} \n ${logData}`
    fsPromise.appendFile("log.txt", logData);
  } catch (error) {
    console.log(error);
  }
}

// Write your code here

export const loggerMiddleware = async (req, res, next) => {
  // Write your code here
  if (req.url.includes("user")) {
    const logData = `req URL: ${req.url} \n reqBody: ${JSON.stringify(req.body)}`
    await log(logData);
  }
  next();
};
export default loggerMiddleware;
