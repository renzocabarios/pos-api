import model from "./model.js";
import { RESOURCE } from "../../../constants/index.js";
import admin from "./discriminators/admin.model.js";

const getAll = async () => {
  return await model.find({ deleted: false });
};

const add = async (_body, session) => {
  if (_body.type === RESOURCE.USERS.ADMIN) {
    return await admin.create([_body], { session });
  }
  return await model.create([_body], { session });
};

const update = async (filter, _body, session) => {
  return await model.findOneAndUpdate(filter, _body, { new: true, session });
};

const removeOne = async (filter, session) => {
  return await model.findOneAndUpdate(
    filter,
    { deleted: true },
    { new: true, session }
  );
};

export default { getAll, add, update, removeOne };
