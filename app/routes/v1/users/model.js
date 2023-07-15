import mongoose from "mongoose";
import { RESOURCE } from "../../../constants/index.js";

const option = {
  discriminatorKey: "__t",
  timestamps: true,
};

const schema = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    deleted: {
      type: Boolean,
      default: false,
    },
  },
  option
);

export default mongoose.model(RESOURCE.USERS.DEFAULT, schema);
