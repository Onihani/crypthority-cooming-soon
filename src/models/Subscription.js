import mongoose from "mongoose";

const SubscriptionSchema = new mongoose.Schema({
  email: String,
});

module.exports =
  mongoose.models.Subscription ||
  mongoose.model("Subscription", SubscriptionSchema);
