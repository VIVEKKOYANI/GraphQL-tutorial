import mongoose from "mongoose";

const quotesShema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  by: {
    type: mongoose.Schema.ObjectId,
    ref: "User"
  },
})

mongoose.model("Quote", quotesShema)