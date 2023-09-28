import { Schema } from "mongoose";
import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    minLength: 6,
    maxLength: 30,
  },

  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: (value) => validator.isEmail(value),
      message: () => "Invalid email",
    },
  },

  password: {
    type: String,
    required: true,
    minLength: 8,
    maxLength: 40,
  },

  refreshTokens: [
    {
      type: String,
    },
  ],
});

userSchema.pre("save", async function (next) {
  const user = this;

  if (user.isModified || user.isNew) {
    const hashedPassword = await bcrypt.hash(user.password, 8);

    user.password = hashedPassword;
  }

  return next();
});

userSchema.post("save", (error, _doc, next) => {
  if (error.code === 11000) {
    return { message: "User with that email already exists" };
  }

  return next();
});

userSchema.set("toJSON", {
  transform: function (_doc, ret, _opt) {
    delete ret.password, delete ret.refreshTokens, delete ret.__v;
    return ret;
  },
});

export const User = mongoose.model("User", userSchema);
