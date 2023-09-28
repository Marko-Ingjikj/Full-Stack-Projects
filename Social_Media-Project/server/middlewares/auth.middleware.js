import { verifyAccessToken } from "../const/jwt.const.js";
import { User } from "../models/user.model.js";

export const authValidator = async (req, res, next) => {
  try {
    const authorizationHeader = req.headers.authorization;

    if (!authorizationHeader) res.sendStatus(403);

    const token = authorizationHeader.split(" ")[1];

    if (!token) res.sendStatus(403);

    const { userId } = verifyAccessToken(token);

    const foundUser = await User.findById(userId);

    if (!foundUser) res.sendStatus(403);

    req.user = foundUser;

    return next();
  } catch (error) {
    console.log(error);

    res.sendStatus(403);
  }
};
