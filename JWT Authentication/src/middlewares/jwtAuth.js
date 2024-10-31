// Please don't change the pre-written code
// Import the necessary modules here
import jwt from "jsonwebtoken";

const jwtAuth = (req, res, next) => {
  // Write your code here
  const token = req.cookies.jwtToken;

  if (!token) {
    return res.status(401).json({
      "success": false, msg: {
        name: "JsonWenTokenError",
        message: "jwt must be provided"
      }
    })
  }
  try {
    const decoded = jwt.verify(token, "CODINGNIJASSECRETKEY");
    next();
  } catch (error) {
    return res.status(401).json({
      "status": false, msg: {
        name: "JsonWenTokenError",
        message: "jwt must be provided"
      }
    })
  }
};

export default jwtAuth;
