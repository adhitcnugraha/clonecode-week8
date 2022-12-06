import mongoose from "mongoose";

const wacappSchema = mongoose.Schema({
  message: String,
  name: String,
  timestamp: Date,
  received: Boolean,
});

export default mongoose.model("messagecontents", wacappSchema);
