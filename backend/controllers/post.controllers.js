import Profile from "../models/profile.model.js";
import User from "../models/user.model.js";

import bcrypt from 'bcrypt';

export const runningCheck = async (req, res) => {
    return res.status(200).json({ message: "Running" });
};
const register = async (res, req) => {
    try {
        const {name, email, password, username} = req.body;
        if (!name || !email || !password || !username) return res.status(400).json({message: "All fields are required"})
        const user = await User.findOne({
            email
        })
        if (user) return res.status(400).json({message: "User Already Exists"})

        const hashedPassword = await bcrypt.hash(password,10);
        const newUser = new User ({
            name, 
            email,
            password: hashedPassword,
            username
        });

        await newUser.save();


        const profile = new Profiler({userId : newUser._id});
    } catch (error) {
        return res.status(500).json({message : error.message})
    }
}