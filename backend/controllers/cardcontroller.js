const asyncHandler = require("express-async-handler");
const Cards = require("../models/cardmodel");

const getCards = asyncHandler(async (req, res) => {
  const cards = await Cards.find();
  res.status(200).json(cards);
});

const createCards = asyncHandler(async (req, res) => {
  if (!req.body) {
    res.status(400);
    throw new Error("Please add a text field");
  }
  const card = await Cards.create({
    name: req.body.name,
    health: req.body.health,
    attack: req.body.attack,
    ability: req.body.ability,
  });

  res.status(200).json(card);
});

module.exports = {
  getCards,
  createCards,
};
