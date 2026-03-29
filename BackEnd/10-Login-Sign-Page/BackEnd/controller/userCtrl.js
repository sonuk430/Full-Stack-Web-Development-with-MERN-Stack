const userCaroller = {
  //! New User Register
  register: async (req, res) => {
    res.json({ message: "User Register Successfully" });
  },
  //!  User Login
  login: async (req, res) => {
    res.json({ message: "Login Successfully" });
  },
  //!  User Password Change
  changePassword: async (req, res) => {
    res.json({ message: "Password Change Successfully" });
  },
  //!  User Profile Change
  changeUserProfile: async (req, res) => {
    res.json({ message: "User Profile Change Successfully" });
  },
  //!  User Profile Change
  userLogOut: async (req, res) => {
    res.json({ message: "User Logout Successfully" });
  },
};

module.exports = userCaroller;
