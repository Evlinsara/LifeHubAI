const express = require("express");
const router = express.Router();

const protect = require("../middlewares/auth.middleware");
const upload = require("../middlewares/upload.middleware");
const {
  addPet,
  getPets,
  getPet,
  editPet,
  removePet,
  uploadPetImage,
} = require("../controllers/pet.controller");

router.post("/", protect, addPet);

router.get("/", protect, getPets);
router.post(
  "/:id/upload",
  protect,
  upload.single("image"),
  uploadPetImage
);

router.get("/:id", protect, getPet);

router.put("/:id", protect, editPet);

router.delete("/:id", protect, removePet);

module.exports = router;