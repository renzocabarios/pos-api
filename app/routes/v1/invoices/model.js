import mongoose from "mongoose";
import { RESOURCE } from "../../../constants/index.js";

const schema = mongoose.Schema({
  items: {
    type: [
      {
        name: String,
        price: Number,
        quantity: Number,
        item: {
          type: mongoose.Schema.Types.ObjectId,
          ref: RESOURCE.INVOICES,
        },
      },
    ],
    required: true,
  },
  total: {
    type: Number,
    required: true,
  },
  deleted: {
    type: Boolean,
    default: false,
  },
});

export default mongoose.model(RESOURCE.INVOICES, schema);
