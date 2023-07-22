import model from "./model.js";

const countTotal = async () => {
  return await model.countDocuments({ deleted: false });
};

const getAll = async ({ limit = 10, page = 1 }) => {
  return await model
    .find({ deleted: false })
    .limit(limit * 1)
    .skip((page - 1) * limit);
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

export default { getAll, add, update, removeOne, countTotal };
