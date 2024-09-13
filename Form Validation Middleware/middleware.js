// Please don't change the pre-written code
// Import the necessary modules here

export const formValidationMiddleware = (req, res, next) => {
  // Write your code here
  const { name, mobile } = req.body;
  const errors = {};
  if (name == null || name.length < 5) {
    errors.name = "enter valid name of length greater than 4";
  }
  if (mobile === null || mobile.length < 10) {
    errors.mobile = "enter valid mobile number of 10 digits";
  }
  console.log(errors);
  if (errors.name || errors.mobile) {
    res.status(401).send(errors);
  }
  next();
};
