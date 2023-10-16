import { Schema, model } from "mongoose";
import { RESOURCE } from "../../../constants";
import { IItemModel } from "../../../types";

const option = {
  timestamps: true,
};

const schema = new Schema<IItemModel>(
  {
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
  },
  option
);

export default model(RESOURCE.ITEMS, schema);
