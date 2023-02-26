const { userDetailsModel } = require("../Models/UserDetails.model");

const getUserDetails = async (req, res) => {
  let { page = 1, gender, order, q = "" } = req.query;
  let limit = 10;
  let search = {};
  if (gender) {
    search.gender = gender;
  }
  if (order == "asc") {
    order = 1;
  } else if (order == "desc") {
    order = -1;
  }
  console.log(q);
  try {
    let total = await userDetailsModel.find().count();
    let userDetails = await userDetailsModel
      .find(search)
      .limit(limit)
      .skip((page - 1) * limit)
      .sort({ "dob.age": order });
    let totalPage = Math.ceil(total / limit);
    return res.send({ total: totalPage, data: userDetails });
  } catch (error) {
    res
      .status(500)
      .send({ msg: "Somthing Went Wrong at the get user details!", error });
  }
};

module.exports = {
  getUserDetails,
};
