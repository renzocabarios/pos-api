import service from "./service.js";
import { Request, Response } from "express";

const getAll = async (_req: Request, _res: Response) => {
  const data = await service.getAll();
  _res.send({ data, status: "success", message: "Get sample success" });
};

const getById = async (_req: Request, _res: Response) => {
  const { id } = _req.params;
  const data = await service.getById(id);
  _res.send({ data: [data], status: "success", message: "Get sample success" });
};

const add = async (_req: Request, _res: Response) => {
  const data = await service.add(_req.body);
  _res.send({
    data: [data],
    status: "success",
    message: "Create sample success",
  });
};

const update = async (_req: Request, _res: Response) => {
  const { id } = _req.params;
  const data = await service.update(id, _req.body);
  _res.send({
    data: [data],
    status: "success",
    message: "Update sample success",
  });
};

const deleteById = async (_req: Request, _res: Response) => {
  const { id } = _req.params;
  const data = await service.deleteById(id);
  _res.send({
    data: [data],
    status: "success",
    message: "Delete sample success",
  });
};

export { getAll, getById, add, update, deleteById };
