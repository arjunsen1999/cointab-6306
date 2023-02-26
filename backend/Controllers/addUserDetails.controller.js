const { userDetailsModel } = require("../Models/UserDetails.model");


const addUserDetails = async (req, res) => {
  let data = req.body.map((ele) =>{
  let userId = ele.id;
  delete ele.id;
  ele.userId = userId;
  return ele
  });
 
  try {
    await userDetailsModel.create(data);
    return res.send({msg : "Successfully Added!"});
  } catch (error) {
    console.log(error)
    return res
      .status(500)
      .send({ msg: "Somthing Went Wrong at the add user details!" });
  }
};

module.exports = {
  addUserDetails,
};
