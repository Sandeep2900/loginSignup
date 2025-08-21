const UserModel = require("../Models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    //Check if the user already exists
    const user = await UserModel.findOne({ email });
    if (user) {
      return res.status(409).json({
        message: "User already registered, Please login",
        success: false,
      });
    }

    //create new user instance
    const userModel = new UserModel({ name, email, password });

    //Hash Password
    userModel.password = await bcrypt.hash(password, 10);

    //save user instance
    await userModel.save();

    res.status(201).json({
      message: "SignUp Successfull",
      success: true,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      success: false,
    });
  }
};

//login code
const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const errMsg = "Auth failed, Email or Password is wrong";

    //Check if the user already exists
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(403).json({
        message: errMsg,
        success: false,
      });
    }

    //compare the user password with the already saved passwords
    const isPassEqual = await bcrypt.compare(password, user.password);

    //agar password wrong h toh apan ye message show krenge----
    if (!isPassEqual) {
      return res.status(403).json({
        message: errMsg,
        success: false,
      });
    }

    //jwt token inplementation
    const jwtToken = jwt.sign(
      { email: user.email, _id: user.id },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "24h" }
    );

    res.status(200).json({
      message: "Login Successfull",
      success: true,
      jwtToken,
      email,
      name: user.name,
    });
  } catch (error) {
    console.error("Login Error: ", error.message);
    res.status(500).json({
      message: "Internal server error",
      success: false,
    });
  }
};

module.exports = {
  signup,
  login,
};
