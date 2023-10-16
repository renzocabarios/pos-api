import model from "./model.js";
import { ClientSession } from "mongoose";
const getAll = async () => {
  return await model.find({ deleted: false });
};

const add = async (_body: any, session: ClientSession) => {
  return await model.create([_body], { session });
};

const update = async (filter: any, _body: any, session: ClientSession) => {
  return await model.findOneAndUpdate(filter, _body, { new: true, session });
};

const removeOne = async (filter: any, session: ClientSession) => {
  return await model.findOneAndUpdate(
    filter,
    { deleted: true },
    { new: true, session }
  );
};

const getByEmail = async (email: string) => {
  return await model.findOne({ email, deleted: false });
};

export default { getAll, add, update, removeOne, getByEmail };
