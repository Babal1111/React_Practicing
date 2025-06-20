const { response } = require('express');
const jwt = require('jsonwebtoken');


const secret = "qwerty";

const authController ={
    login:(request,response) =>{
        const {username,password} = request.body; // EXPRESS.JSON middleware se aya

          if(username ===  'admin' && password ==='admin'){
            // if credentials are correct well use jwt 
            const userDetails = {

                name:"Ap Dhillon",
                email:"shinda@gmail.com"
            }

           const token =  jwt.sign(userDetails,secret,{expiresIn : '1h'});

           // we can directly send this to user but we will send this to user as cookied As A RESPONSIBLE DEELOPER

           response.cookie('jwtToken',token,{
            httpOnly:true,// only server will be able to change its val
            secure:true, // int will onlyu run on https
            domain:'localhost',
            path:'/'
           });
           response.json({message:'User authenticated', userDetails: userDetails});
          }
          else{
        response.status(401).json({message:'invalid credentials'}); 

    }
},
logout: (request,response)=>{
    response.clearCookie('jwtToken');
    response.json({message: 'userlogged out successfullt'});

},

isUserLoggedIn:(request,response)=>{
    const token = request.cookies.jwtToken;

    if(!token){
        return response.status(401).json({message: 'unauthorised access'});
    }

    jwt.verify(token,secret,(error,userDetails)=>{
        if(error){
            return response.status(401).json({message: 'unauthorised access'});
        }else{
            return response.json({userDetails: secret});
        }
    })
}
    }

  module.exports = authController;