import express from "express";
import userRoutes from "../userRoutes";
const appRouterV1 = express.Router();

appRouterV1.use("/users", userRoutes);

export default appRouterV1;
