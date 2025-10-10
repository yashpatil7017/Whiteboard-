const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

const SECRET_KEY = "your_secret_key"; // Replace with a secure key

// Register User
exports.registerUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            console.log("❌ Missing fields - email:", !!email, "password:", !!password);
            return res.status(400).json({ error: "All fields are required" });
        }
        console.log("✅ Fields present, checking if user exists...");
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            console.log("❌ User already exists with email:", email);
            return res.status(400).json({ error: "User already exists" });
        }
        console.log("✅ User doesn't exist, creating new user...");
        const newUser = new User({ email, password });
        await newUser.save();
        console.log("✅ User saved successfully!");

        res.status(201).json({ message: "User registered successfully!" });
    } catch (error) {
        console.error("❌ Error during registration:", error);
        res.status(500).json({ error: "Registration failed", details: error.message });
    }
};

// Login User
exports.loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ error: "Invalid credentials" });

        const isMatch = await user.comparePassword(password);
        if (!isMatch) return res.status(400).json({ error: "Invalid credentials" });

        const token = jwt.sign({ userId: user._id }, SECRET_KEY, { expiresIn: "7d" });

        res.json({ message: "Login successful", token });
    } catch (error) {
        res.status(500).json({ error: "Login failed", details: error.message });
    }
};

// Get User Details
exports.getUser = async (req, res) => {
    try {
        const user = await User.findById(req.userId).select("-password");
        if (!user) return res.status(404).json({ error: "User not found" });

        res.json(user);
    } catch (error) {
        res.status(500).json({ error: "Failed to get user", details: error.message });
    }
};
