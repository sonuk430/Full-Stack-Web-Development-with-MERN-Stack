const User = require("../models/userModel");

const register = async (req, res) => {
  const { name, email, password } = req.body;
  if ((!name, !email, !password)) {
    return res.json({ message: "All Filed are required" });
  }
  const user = await User.create({ ...req.body });
  const token = user.createJWT();
  res.status(201).json({ user: { name: user.name }, token });
};

// const register = async (req, res) => {
//   const { name, email, password } = req.body;
//   if ((!name, !email, !password)) {
//     return res.json({ message: "All Filed are required" });
//   }
//   const user = await User.create({ ...req.body });
//   const token = jwt.sign(
//     { userId: user._id, username: user.name },
//     "jwtSecret",
//     { expiresIn: "30d" },
//   );
//   res.status(201).json({ user: { name: user.name }, token });
// };

// const register = async (req, res) => {
//   const { name, email, password } = req.body;

//   const salt = await bcrypt.genSalt(10);
//   const hashPassword = await bcrypt.hash(password, salt);
//   const tempUser = { name, email, password: hashPassword };

//   if ((!name, !email, !password)) {
//     return res.json({ message: "All Filed are required" });
//   }
//   const user = await User.create({ ...tempUser });
//   res.status(201).json({ user });
// };

const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: "Please provide Email & Password" });
  }

  const user = await User.findOne({ email });

  if (!user) {
    return res.status(400).json({ message: "Invalid Credentials" });
  }

  const isPasswordCorrect = await user.comparePassword(password);
  if (!isPasswordCorrect) {
    return res.status(400).json({ message: "Invalid Credentials" });
  }

  // Compare password

  const token = user.createJWT();
  res
    .status(200)
    .json({ message: "Login Successfully", user: { name: user.name }, token });
};

module.exports = { register, login };
