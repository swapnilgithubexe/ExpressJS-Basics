export const invalidRoutesHandlerMiddleware = (req, res, next) => {
  res
    .status(404)
    .json({ success: false, msg: `Invalid path: ${req.originalUrl}` });
  next();
};
