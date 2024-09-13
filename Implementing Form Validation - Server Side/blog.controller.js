export const validateBlog = (req, res) => {
  const { title, description, imageUrl } = req.body;
  let errors = [];


  if (!title || title.trim() == "") {
    errors.push("The title field should not be empty");
  }
  if (title.trim().length < 3) {
    errors.push("The title field should contain at least 3 characters");
  }
  if (!description || description.trim() == "") {
    errors.push("The description field should not be empty");
  }
  if (description.trim().length < 10) {
    errors.push("The description field should contain at least 10 characters");
  }
  if (imageUrl && imageUrl.trim() !== "") {
    try {
      const url = new URL(imageUrl.trim());
    } catch (error) {
      errors.push("The image URL provided should be a valid URL");
    }
  }

  if (errors.length > 0) {
    return res.status(401).render("addBlog", { errors: errors, success: false });
  }

  res.status(201).render("addBlog", { errors: [], success: true });
};

export const renderBlogForm = (req, res) => {
  res.render("addBlog", { errors: null, success: false });
};
