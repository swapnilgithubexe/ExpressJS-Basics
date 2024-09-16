// Please don't change the pre-written code

import { updateUsers, users } from "./user.model.js";

export const renderUpdateForm = (req, res) => {
  res.render("update-form", { user: {}, error: null });
};

export const updateUser = (req, res) => {
  // console.log(req.body);
  const isUpdated = updateUsers(req.body);
  if (isUpdated) {
    res.status(201).render("update-form", { user: req.body, error: null });
  } else {
    res
      .status(400)
      .render("update-form", { user: {}, error: "user not found!" });
  }
};
