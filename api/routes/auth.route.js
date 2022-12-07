import express from 'express';
import userModel from "../models/users.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv"

const router = express.Router();
dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET;

//Register
router.post('/register',async (req, res) => {
    try {
        const user = req.body
        let { username, email, password} = user;

        let userExists = await userModel.findOne({email});
        let usernameExists = await userModel.findOne({username});
        if(userExists){
            return res.status(400).send({
                status: false,
                message: 'User already exists.'
            })
        }
        else if(usernameExists){
            return res.status(400).send({
                status: false,
                message: 'Username already taken.'
            })
        }
        else{
            password = bcrypt.hashSync(password);
            let newUser = await userModel.create({
                username,email,password
            })
            newUser = newUser.toJSON();
            delete newUser.password;
            return res.send({
                message: 'User successfully registered.',
                data: newUser
            });
        }
    } catch (error) {
        res.status(500).send({
            message: error
        });
    }
})

//Login
router.post('/login',async (req, res) => {
    try {
        const user = req.body
        let {username, password} = user;

        let userExists = await userModel.findOne({username});

        if(userExists){
            let match = bcrypt.compareSync(password, userExists.password);

            if(match){
                let token = jwt.sign({
                    _id : userExists._id,
                    username: userExists.username
                },JWT_SECRET)

                // console.log(token,"token")

                // Verifying...
                let result = jwt.verify(token, JWT_SECRET);
                // console.log(result,"result or payload");

                // Decoding...
                result = jwt.decode(token);
                // console.log(result,"decrypted result");

                return res.send({
                    message:"User succesfully logged in.",
                    data : token,
                    user:result
                })

            } else {
                return res.status(400).send({
                    status: false,
                    message: 'Incorrect password !'
                })
            }
        } else {
            return res.status(400).send({
                status: false,
                message: 'User does not exists.'
            })
        }

    } catch (error) {
        res.status(500).send({
            message: error
        });
    }
})

export default router