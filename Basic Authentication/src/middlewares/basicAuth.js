// Please don't change the pre-written code
// Import the necessary modules here

import { getAllUsers } from "../features/user/model/user.model.js";


const basicAuthMiddleware = (req, res, next) => {
  // Write your code here
  const authHeader = req.headers["authorization"];

  if (!authHeader) {
    return res.status(401).send({ "success": "false", "message": "no authorization details found" })
  }

  const base64creds = authHeader.replace('Basic ', '');

  const decodedCreds = Buffer.from(base64creds, 'base64').toString('utf-8');

  const creds = decodedCreds.split(":");

  const user = getAllUsers().find(u => u.email == creds[0] && u.password == creds[1]);

  if (user) {
    next()
  } else {
    return res.status(401).send({ "success": "false", "message": "authorization failed" })
  }
};

export default basicAuthMiddleware;
