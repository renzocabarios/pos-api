import mongoose from "mongoose";
import { RESOURCE } from "../../../../constants/index.js";
import users from "../model.js";

const option = {
  discriminatorKey: "__t",
};

const schema = new mongoose.Schema({}, option);

export default users.discriminator(RESOURCE.USERS.ADMIN, schema);
