import express from "express"
import { connectDB } from "./dbconnect.js"
import { userModel } from "./models/user.model.js";
import jwt from "jsonwebtoken";
import cors from "cors"
connectDB();

const app = express()
app.use(cors({ origin: 'http://localhost:5173/' }));
const port = 3000 || 4000
app.get("/", (req, res) => {
    res.json("hello")
})

app.post("/signup", async (req, res) => {
    const { username, password } = req.body;
    const user = await userModel.create({
        username,
        password
    })
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET)
    res.json({
        msg: "user created ",
        token: token
    }).status(201)
})

app.listen(port, () => {
    console.log("running on :", port)
})