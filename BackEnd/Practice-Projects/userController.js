const bcrypt = require("bcryptjs");
const User = require("./userModel");

const userController = {
  register: async (req, res) => {
    const { username, email, password } = req.body;

    //!check All Fielded are required
    if (!username || !email || !password) {
      throw new Error("Please Provide All Fields");
    }
    //! check Exiting User
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      throw new Error("User already Register");
    }
    //! Hashed Password
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    //! Create User & Save User
    const userCreated = await User.create({
      username,
      email,
      password: hashPassword,
    });
    //! Send Response

    res.status(201).json({
      message: "User Created Successfully",
      username: userCreated.username,
      email: userCreated.email,
      id: userCreated._id,
    });
  },
};

module.exports = userController;
