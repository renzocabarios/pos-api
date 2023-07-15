import model from "./model.js";

const getAll = async () => {
  return await model.find({ deleted: false });
};

const getById = async (_id) => {
  return await model.findOne({ _id, deleted: false });
};

const add = async (_body) => {
  return await model.create(_body);
};

const update = async (_id, _body) => {
  return await model.findOneAndUpdate({ _id }, _body);
};

const deleteById = async (_id) => {
  return await model.findOneAndUpdate({ _id }, { deleted: true });
};

export default { getAll, getById, add, update, deleteById };
