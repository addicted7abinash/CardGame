const express = require("express");
const router = express.Router();
const { getCards, createCards } = require("../controllers/cardcontroller");

router.get("/", getCards);

router.post("/", createCards);

router.put("/:id", (req, res) => {
  res.status(200).json({ message: `update ${req.params.id}` });
});

router.delete("/:id", (req, res) => {
  res.status(200).json({ message: `update ${req.params.id}` });
});

module.exports = router;
