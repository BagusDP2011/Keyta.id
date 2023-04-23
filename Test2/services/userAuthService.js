const User = require("../models/user");
const { v4:uuidv4 } = require("uuidv4");

const register = async (reqBody) => {
  try {
    const { first_name, last_name, bod, location } = reqBody;
    // const user = await 
    // return 
    return User.create({ first_name, last_name, bod, location });
  } catch (error) {
    console.log(error);    
  }

  // try {

  //     const findUserByEmail = await User.findOne({
  //       where: {
  //         email: email,
  //       },
  //     });

  //     if (!findUserByEmail) {
  //       return res.status(400).json({
  //         message: "Email not found",
  //       });
  //     }

  //     if (findUserByEmail.is_verify === false) {
  //       return res.status(400).json({
  //         message: "Unverified user",
  //       });
  //     }

  //     const passwordValid = bcrypt.compareSync(
  //       password,
  //       findUserByEmail.password
  //     );

  //     if (!passwordValid) {
  //       return res.status(400).json({
  //         message: "Password invalid",
  //       });
  //     }

  //     delete findUserByEmail.password;

  //     const token = signToken({
  //       id: findUserByEmail.id,
  //     });

  //     return res.status(201).json({
  //       message: "User logged in",
  //       data: findUserByEmail,
  //       token: token,
  //     });
  //   } catch (err) {
  //     console.log(err);
  //     return res.status(500).json({
  //       message: "Server error",
  //     });
  //   }
};

module.exports = {
  register,
};
