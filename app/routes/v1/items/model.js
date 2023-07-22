import mongoose from "mongoose";
import { RESOURCE } from "../../../constants/index.js";

const schema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  deleted: {
    type: Boolean,
    default: false,
  },
});

export default mongoose.model(RESOURCE.ITEMS, schema);
