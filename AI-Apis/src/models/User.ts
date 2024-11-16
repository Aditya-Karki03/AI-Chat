import { Schema, model } from "mongoose";

const UserSchema = new Schema({
  firstName: {
    type: String,
    trim: true,
    required: true,
  },
  email: {
    type: String,
    trim: true,
    required: true,
  },
  password: {
    type: String,
    trim: true,
    required: true,
  },
});

const User = model("User", UserSchema);

export default User;
