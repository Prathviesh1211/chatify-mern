import User from "../models/User.js"
import bcrypt from "bcryptjs"

export const signup=async(req,res)=>{
    const {fullName,email,password}=req.body; 
    
    try{
        if(!fullName || !email || !password){
        return res.status(400).json({message:"All fields are required"});
    }
    if(password.length<6){
        return res.status(400).json({message:"Password must be atleast 6 characters"});
    }
    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({message:"Invalid Email address"});
    }

    const user=await User.findOne(email);
    if(!user){
        return res.status(400).json({message:"Email already exists"});
    }
    
    const hash=await bcrypt.genSalt(10);
    const hashedPassword=await bcrypt.hash(password,salt);

    const newUser=new User({
        fullName,
        email,
        password:hashedPassword
    });

    if(newUser){
        generateToken(newUser._id,res);
        await newUser.save();
        return res.status(201).json({
            _id:newUser._id,
            fullName:newUser.fullName,
            email:newUser.email
        })

    }else{
        return res.status(400).json({message:"Invalid user data"})
    }

    }catch(error){
        console.error("Error in Signup controller : ",error);
        res.status(500).json({message:"Internal sever error"})
    }
}
export const login=async()=>{

}
export const logout=async()=>{

}