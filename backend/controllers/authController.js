const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

//Generate Jwt Token
const generateToken = (userId) => {
  return jwt.sign({ id: userId }, process.env.JWT_SECRET, { expiresIn: "7d" });
};

// @desc   Register a new user
// @route  Post /api/auth/register
// @acess  Public
const registerUser = async (req, res) => {};

// @desc   Login user
// @route  Post /api/auth/login
// @acess  Public
const loginUser = async (req, res) => {};

// @desc   Get user profile
// @route  GET /api/auth/profile
// @acess  Private (Requires JWT)
const getUserProfile = async (req, res) => {};

module.exports = { registerUser, loginUser, getUserProfile };
