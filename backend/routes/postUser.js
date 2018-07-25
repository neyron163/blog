import express from 'express';
import UsersModel from '../models/users';

let login = 'admin';
const User = new UsersModel({
    userName: login,
    userPassword: 'admin',
    privilege: 1
});

UsersModel.find((err, users) => {
        if(!users.length){
            User.save();
        }else{
            for(let i = 0; i < users.length; i++){
                if(users[i].userName === login){
                    return;
                }else{
                    User.save();
                }
            }
        }
});

const router = express.Router();

router.post('/', (req, res) => {
    let login = req.body[0].login,
        password = req.body[0].password;

    UsersModel.find((err, users) => {
        for(let i = 0; i < users.length; i++){
            if(users[i].userName === login && users[i].userPassword === password){
                res.send(true);
            }else{
                res.send(false)
            }
        }
    })
});

export default router;