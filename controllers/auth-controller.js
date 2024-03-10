const User = require("../models/user-model");
const bcrypt = require("bcrypt");




const  home = async (req, res) => {
    try{

        res.status(200).send("welcome at the home page");
    }
    catch(error){
        console.log(error);
    }
}

const  register = async (req, res) => {
    try{
         console.log(req.body);

         const { username, email, phone, password } = req.body;

         const  userExist = await User.findOne({email});

         if ( userExist)
         {
            return res.status(400).json({msg:" Email Already Exist"});
         }
         

        //  const saltround = 10;
        //  const hash_pasword = await bcrypt.hash(password, saltround);




        // const userCreated = await User.create({username, email, phone, password:hash_pasword,});
        const userCreated = await User.create({username, email, phone, password,});
         res.status(201).json({msg: "Registeration Successfull", token: await userCreated.generateToken(), userId: userCreated._id.toString(), });
        // res.status(200).json(req.body);
    }
    catch(error){
         console.log(error);
        res.status(500).json({msg:" internal server error"});
        // console.log(error);
    }
}

const login = async (req,res) => {

    try {
        
        const {email, password} = req.body;

        const userExist = await  User.findOne({ email });

        if(!userExist){
            return res.status(400).json({ message: "Invalid Credentials"});
        }

        // const user = await bcrypt.compare(password, userExist.password);

        const  user = await userExist.comparePassword(password);

        if(user){
            res.status(200).json({msg: "login Successfull", token: await userExist.generateToken(), userId: userExist._id.toString(), });
      
        }
        else{
            res.status(401).json ({message:"Invalid email or password"});
        }

    } catch (error) {
        next(error);
        // res.status(500).json("internal server error");
    }
    
};





module.exports = { home , register, login};