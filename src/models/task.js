import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      required: true,
      trim: true,
    },

    completed: {
      type: Boolean,
      default: false,
    },

    priority: {
      type: String,
      enum: ["Low", "Medium", "High"],
      default: "Medium",
    },

    dueDate: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Task", taskSchema);