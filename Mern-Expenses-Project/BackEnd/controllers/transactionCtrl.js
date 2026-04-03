const asyncHandler = require("express-async-handler");
const Category = require("../model/Category");
const Transaction = require("../model/Transaction");

//!User Registration

const transactionController = {
  //! Add
  create: asyncHandler(async (req, res) => {
    const { type, category, amount, date } = req.body;
    if (!amount || !type || !date) {
      throw new Error("Type, amount and date are required");
    }
    //! Create
    const transaction = await Transaction.create({
      user: req.user,
      type,
      category,
      amount,
      description,
    });
    res.res.status().json({ transaction });
  }),

  //! Lists
  lists: asyncHandler(async (req, res) => {}),

  //! update
  update: asyncHandler(async (req, res) => {}),
  //! delete
  delete: asyncHandler(async (req, res) => {}),
};

module.exports = transactionController;
