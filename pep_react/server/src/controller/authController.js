const { response } = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs'); //
const Users = require('../model/Users');

const secret = "qwerty"; 

const authController = {
  login: async (request, response) => {
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
      response.status(500).json({ message: 'Internal server error' });
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
  }
};

module.exports = authController;