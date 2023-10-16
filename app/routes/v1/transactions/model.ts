import { Schema, model } from "mongoose";
import { RESOURCE } from "../../../constants";
import { ITransactionModel } from "../../../types";

const option = {
  timestamps: true,
};

const schema = new Schema<ITransactionModel>(
  {
    items: {
      type: [],
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
  },
  option
);

export default model(RESOURCE.TRANSACTIONS, schema);
