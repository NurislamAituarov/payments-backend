const { Router } = require('express');
const Payments = require('../models/mongo');
const router = Router();

router.get('/', async (req, res) => {
  const payment = await Payments.find({});
  res.json(payment);
});

router.post('/payments', async (req, res) => {
  const payment = new Payments({
    CardNumber: req.body.CardNumber,
    ExpDate: req.body.ExpDate,
    Cvv: req.body.Cvv,
    Amount: req.body.Amount,
  });

  await payment.save();

  const response = {
    RequestId: payment._id,
    Amount: payment.Amount,
  };

  res.json(response);
});

module.exports = router;
