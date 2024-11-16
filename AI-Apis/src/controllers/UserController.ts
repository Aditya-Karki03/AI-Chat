import { Request, Response } from "express";
import mongoose from "mongoose";
import User from "../models/User";

export class AuthController {
  //to get all the user
  async getAllUser(req: Request, res: Response) {
    try {
      const users = await User.find();
      res.status(200).json({
        data: users,
      });
    } catch (error) {
      res.status(400).json({
        msg: "No Users found",
      });
    }
  }
  //to get a particular user
  async getUser(req: Request, res: Response) {
    try {
      const id = req.params.id;
      const user = await User.findById(id);
      res.status(200).json({
        data: user,
      });
    } catch (error) {
      res.status(400).json({
        msg: "User Not Found",
      });
    }
  }
  //create a user
  async createUser(req: Request, res: Response) {
    try {
      const userData = req.body;
      const user = await User.create(userData);
      res.status(200).json({
        data: user,
      });
    } catch (error) {
      res.status(400).json({
        msg: "Unable to create user",
      });
    }
  }
}
