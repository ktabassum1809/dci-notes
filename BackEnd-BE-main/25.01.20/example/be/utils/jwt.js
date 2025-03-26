
import jwt from 'jsonwebtoken'
import {promisify} from 'util'


export const createToken=async (payload)=>{

    //return jwt.sign(payload,secret,options)

    const asyncSign=promisify(jwt.sign)
    return await asyncSign(payload,process.env.JWT_SECRET,{expiresIn:'1h'})
}



export const verifyToken=async (token)=>{

    const asyncVerify=promisify(jwt.verify)
    return await asyncVerify(token,process.env.JWT_SECRET)
}



































/* import jwt from 'jsonwebtoken';
import {promisify} from 'util';

// to create  a jwt token
export const createToken = async (payload) => {
    const asyncSign = promisify(jwt.sign) // use async sign method
    return await asyncSign(payload, process.env.JWT_SECRET, {expiresIn:'1hr'});
}


// to verify a jwt token
export const verifyToken = async (token) => {
    const asyncVerify = promisify(jwt.verify);
    return await asyncVerify(token, process.env.JWT_SECRET) 
    
}
    */