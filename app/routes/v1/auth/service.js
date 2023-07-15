import model from "./model.js";

const getAll = async () => {
  return await model.find({ deleted: false });
};

const add = async (_body, session) => {
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

const getByEmail = async (email) => {
  return await model.findOne({ email, deleted: false });
};

export default { getAll, add, update, removeOne, getByEmail };
