import mongoose from "mongoose";

const todoSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    status: {
      type: String,
      default: "Pending",
    },
  },
  { timestamps: true }
);

export default mongoose.models.Todo || mongoose.model("Todo", todoSchema);
