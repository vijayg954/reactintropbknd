import mongoose from "mongoose";
const oneLinerSESchema = new mongoose.Schema(
  {
    type: {
      type: String,
      required: true,
    },
    topic: {
      type: String,
      required: true,
    },
    question: {
      type: String,
      required: true,
    },
    answer: {
      type: String,
      required: true,
    },
    order: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);
const OneLiner = mongoose.model("OneLiner", oneLinerSESchema);

export default OneLiner;