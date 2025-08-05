const express = require('express')
const router = express.Router()
const Money = require('../models/money')

//Get all money
router.get('/', async(req,res) => {
    try{
        const entries = await Money.find().sort({_id: -1})
        res.json(entries)
    } catch (err) {
    res.status(500).json({ message: err.message });
  }
})

router.post('/', async (req, res) => {
  const { amount, description } = req.body;

  // Perusvalidointi
  if (amount === undefined || description === undefined) {
    return res.status(400).json({ message: 'amount and description are required' });
  }

  // Muunna amount numeroksi ja tarkista
  const numAmount = Number(amount);
  if (Number.isNaN(numAmount)) {
    return res.status(400).json({ message: 'amount must be a number' });
  }

  if (typeof description !== 'string' || description.trim().length === 0) {
    return res.status(400).json({ message: 'description must be a non-empty string' });
  }

  const money = new Money({
    amount: numAmount,
    description: description.trim()
  });

  try {
    const saved = await money.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;