const userRouter = require("express").Router();
const { addUserDetails } = require("../Controllers/addUserDetails.controller");
const { getUserDetails } = require("../Controllers/getUserDetails.controller");
const {
  deleteUserDetails,
} = require("../Controllers/deleteUserDetails.controller");

userRouter.route("/get").get(getUserDetails);

userRouter.route("/add").post(addUserDetails);

userRouter.route("/deleteAll").delete(deleteUserDetails);

module.exports = {
  userRouter,
};
