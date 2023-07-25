import service from "./service.js";
import { transaction, generateAccess } from "../../../utils/index.js";
import mongoose from "mongoose";
import auth from "../auth/service.js";

const getAll = async (_req, _res) => {
  const { limit = 10, page = 1 } = _req.query;
  const data = await service.getAll({ limit, page });
  _res.send({
    data,
    status: "success",
    message: "Get invoices success",
    meta: {
      access: generateAccess({}),
      total: await service.countTotal(),
      currentPage: parseInt(page),
      totalPage: Math.ceil((await service.countTotal()) / limit),
    },
  });
};

const add = async (_req, _res) => {
  const session = await mongoose.startSession();
  const { items, ...res } = _req.body;
  const total = items.reduce((acc, curr) => acc + curr.price, 0);
  _res.send(
    await transaction(
      session,
      async () => {
        return await service.add({ items, total }, session);
      },
      "Create invoice"
    )
  );
};

// TODO : Think of why
const update = async (_req, _res) => {
  const session = await mongoose.startSession();
  const { id } = _req.params;
  _res.send(
    await transaction(
      session,
      async () => {
        return await service.update({ _id: id }, _req.body, session);
      },
      "Update invoice"
    )
  );
};

const removeOne = async (_req, _res) => {
  const session = await mongoose.startSession();
  const { id } = _req.params;
  _res.send(
    await transaction(
      session,
      async () => {
        return await service.removeOne({ _id: id }, session);
      },
      "Delete invoice"
    )
  );
};

export { getAll, add, update, removeOne };
