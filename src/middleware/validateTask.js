export const validateTask = (req, res, next) => {
  const { text } = req.body;

  if (!text || text.trim() === "") {
    return res.status(400).json({
      success: false,
      message: "Task text is required"
    });
  }

  next();
};