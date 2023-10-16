import mongoose from "mongoose";
import { RESOURCE } from "../../../constants/index.js";

const option = {
  discriminatorKey: "__t",
  timestamps: true,
};

const schema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: RESOURCE.USERS.DEFAULT,
      required: true,
    },
    deleted: {
      type: Boolean,
      default: false,
    },
  },
  option
);

export default mongoose.model(RESOURCE.AUTH, schema);
