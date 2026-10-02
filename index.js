require("dotenv").config();
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const app = express();

app.use(cors({ origin: true }));
app.use(express.json());

// Root test route
app.get("/", (req, res) => {
  res.status(200).send("Hello World");
});

// 🟢 Stripe Payment Route (ይህ መስመር መኖሩን አረጋግጥ!)
app.post("/payment/cd backendcd backencreate", async (req, res) => {
  const total = parseInt(req.query.total);

  if (total > 0) {
    try {
      const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd",
      });

      res.status(201).send({
        clientSecret: paymentIntent.client_secret,
      });
    } catch (error) {
      res.status(500).send({ error: error.message });
    }
  } else {
    res.status(400).send({ message: "Total amount must be greater than 0" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));