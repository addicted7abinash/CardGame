const mongoose = require("mongoose");

const cardSchema = mongoose.Schema(
  {
    name: {
      type: String,
      unique: true,
      required: true,
    },
    health: {
      type: Number,
      required: true,
    },
    attack: {
      type: Number,
      required: true,
    },
    ability: {
      type: String,
      required: true,
      modifier: Number,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Card", cardSchema);
