const { response, request } = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs'); //
const Users = require('../model/Users');
const {oAuth2Client, OAuth2Client} = require('google-auth-library');
const { validationResult } = require('express-validator');
// const secret = "qwerty"; 
require('dotenv').config();

const secret = process.env.JWT_SECRET;
const authController = {


  login: async (request, response) => {

    const errors = validationResult(request);
    // if(!errors.isEmpty()){
    //   return response.status(400).json({ errors: errors.array() });
    // }
    try {
      const { username, password } = request.body;

      const user = await Users.findOne({ email: username });
      if (!user) {
        return response.status(401).json({ message: 'Invalid credentials: User not found in DB' });
      }

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return response.status(401).json({ message: 'Invalid credentials: Wrong password' });
      }

      const userDetails = {
        id: user._id,
        name: user.name,
        email: user.email,
      };

      const token = jwt.sign(userDetails, secret, { expiresIn: '1h' });

      response.cookie('jwtToken', token, {
        httpOnly: true,
        secure: true,
        // path: '/',
      });

      response.json({ message: 'User authenticated', userDetails });
    } catch (error) {
      console.error(error);
      response.status(500).json({ message: 'Internal server error (jwt)' });
    }
  },

  logout: (request, response) => {
    response.clearCookie('jwtToken');
    response.json({ message: 'User logged out successfully' }); 
  },

  isUserLoggedIn: (request, response) => {
    const token = request.cookies.jwtToken;

    if (!token) {
      return response.status(401).json({ message: 'Unauthorized access' });
    }

    jwt.verify(token, secret, (error, userDetails) => {
      if (error) {
        return response.status(401).json({ message: 'Unauthorized access' });
      } else {
        return response.json({ userDetails:userDetails }); 
      }
    });
  },

  register: async(request, response)=>{
    try{
        const {username, password,name} = request.body;

        const isUserAlready = await Users.findOne({email : username});
        if(isUserAlready){
          return response.status(400).json({message: "User already exists "});
        }
        const encryptedPwd = await bcrypt.hash(password,10);

        const user = new Users({
            email:username,
            password:encryptedPwd,
            name:name
        });

        await user.save();
        response.status(200).json({message:'user registred'});

    }catch(error){
        console.log(error);
        return response.status(500).json({message: 'user not registered'});
    }
  },

  googleAuth: async(request,response)=>{
    const {idToken} = request.body;
    if(!idToken){
      return response.status(400).json({message:'Invalid Requeset'});
    }

    try{
      const googleClient = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
      const googleResponse = await googleClient.verifyIdToken({
        idToken:idToken,
        audience: process.env.GOOGLE_CLIENT_ID
      });

      const payload = googleResponse.getPayload();
      const {sub :googleId,email,name} = payload;

      let data = await Users.findOne({email:email});
      if(!data){ //new user first time
        data = new Users({
          email:email,
          name:name,
          isGoogleId:true,
          googleId:googleId
          
          //..
        });
        await data.save();
      }
      const user = {
        id: data.id? data._id: googleId,
        username:email,
        name:name
      };

      const token = jwt.sign(user,secret,{expiresIn:'1h'});

      response.cookie('jwtToken',token,{
        httpOnly:true,
        secure:true,
        domain:'localhost',
        path:'/'
      });

      response.json({message:'User authenticated,userDetails: user'});

    }catch(error){
      console.log(error);
      return response.status(500).json({error:'Internal serrver error '});
    }
  }
};

module.exports = authController;