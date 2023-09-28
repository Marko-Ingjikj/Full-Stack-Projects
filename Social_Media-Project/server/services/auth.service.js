import { User } from "../models/user.model.js";
import bcrypt from "bcryptjs";

export class AuthService {
  static async registerUser(userData) {
    const user = new User(userData);

    await user.save();
  }

  static async login(email, password) {
    const user = await User.findOne({ email });

    if (!user) throw "Invalid Credentials";

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) throw "Invalid Credentials";

    return user;
  }
}
