import { handleLoginModel, handleSingUpModel } from "./user.model.js";

export const handleGame = (req, res) => {
  res.render("index", {
    success: false,
    message: null,
    attemptsLeft: 5,
    show: false,
  });
};

export const handlePost = (req, res) => {
  let { input } = req.body;
  let { attemptsLeft } = req.cookies;
  let { randomNumber } = req.cookies;

  input = Number(input);
  attemptsLeft = Number(attemptsLeft);
  randomNumber = Number(randomNumber);

  res.cookie("attemptsLeft", attemptsLeft - 1, {
    maxAge: 1 * 24 * 60 * 60 * 1000,
  });

  if (randomNumber === input) {
    res.render("index", {
      success: true,
      show: false,
      attemptsLeft,
      randomNumber,
    });
  }

  if (input < randomNumber) {
    res.render("index", {
      show: true,
      success: false,
      attemptsLeft,
      message: "think of a larger number",
      input,
      randomNumber,
    });
  }

  if (input > randomNumber) {
    res.render("index", {
      success: false,
      show: true,
      attemptsLeft,
      message: "think of a smaller number",
      input,
      randomNumber,
    });
  }
};

export const renderLogin = (req, res) => {
  res.render("login");
};
export const renderSignUp = (req, res) => {
  res.render("signup");
};
export const handleSignUp = (req, res) => {
  handleSingUpModel(req.body);
  res.render("login");
};
export const handleLogin = (req, res) => {
  const status = handleLoginModel(req.body);
  if (status) {
    req.session.userEmail = req.body.email;
    res.redirect("/");
  } else res.json({ success: false, message: "Invalid Credentials!!" });
};
