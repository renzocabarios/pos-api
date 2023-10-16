import model from "./model.js";
import { RESOURCE } from "../../../constants/index.js";
import admin from "./discriminators/admin.model.js";
import { ClientSession } from "mongoose";
import { IAddUserDto } from "../../../types/index.js";

async function getAll() {
  return await model.find({ deleted: false });
}

async function add(_body: IAddUserDto, session: ClientSession) {
  if (_body.type === RESOURCE.USERS.ADMIN) {
    return await admin.create([_body], { session });
  }
  return await model.create([_body], { session });
}

async function update(filter: any, _body: any, session: ClientSession) {
  return await model.findOneAndUpdate(filter, _body, { new: true, session });
}

async function removeOne(filter: any, session: ClientSession) {
  return await model.findOneAndUpdate(
    filter,
    { deleted: true },
    { new: true, session }
  );
}

export default { getAll, add, update, removeOne };
