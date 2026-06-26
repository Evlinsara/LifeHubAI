const express = require("express");
const router = express.Router();

const { register, login, getCurrentUser } = require("../controllers/auth.controller");
const protect = require("../middlewares/auth.middleware");

router.post("/register", register);

router.post("/login", login);


router.get("/profile", protect, (req, res) => {
  res.status(200).json({
    success: true,
    message: "Protected Route",
    user: req.user,
  });
});
router.get("/me", protect, getCurrentUser);

module.exports = router;