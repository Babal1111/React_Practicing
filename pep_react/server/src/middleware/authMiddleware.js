const jwt = require('jsonwebtoken');
const authMiddleware={
    protect: async(request,response,next)=>{
        // isuser loggedin wala same logic


        try{
            const token = request.cookies?.jwtToken;
            if(!token){
                return response.status(401).json({error:"Please login to access this resource"})
            }
            const user = jwt.verify(token,process.env.JWT_SECRET);
            request.user = user; //?  
            //It attaches the decoded user info to request.user, so that your route/controller can access it, like:
            next();

        }catch(error){
            console.log(error);
            return response.status(500).json({error:"internal server error"});

        }
    }
}

module.exports  = authMiddleware;