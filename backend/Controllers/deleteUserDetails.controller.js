const { userDetailsModel } = require("../Models/UserDetails.model");

const deleteUserDetails = async (req, res) => {
  try {
    await userDetailsModel.deleteMany();
    return res.send({msg : "Deleted Successfully!"});
  } catch (error) {
    res
      .status(500)
      .send({ msg: "Somthing Went Wrong at the delete user details!" });
  }
};

module.exports = {
  deleteUserDetails,
};
