const express = require('express');
const authRoutes = require('./src/Routes/authRoutes');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express(); // instance of exprss 

app.use(express.json());//middleware , jo bhi req aa rhi usko json format mai conver krdo
app.use(cookieParser()); // For reading cookies
mongoose.connect(process.env.MONGO_URI).then(()=>console.log("DB connected to mongoose")).catch(error => console.log(error));

const corsOptions = {

    // origin: 'http://localhost:3000',//clients port
    origin: process.env.CLIENT_ENDPOINT,
    credentials: true, //?
}
app.use(cors(corsOptions));

app.use('/auth',authRoutes);

const port = 5000;
app.listen(port,()=>{
    console.log(`Server runnuig on port ${port}`);
}) 






/// we cna take an optinal param also to see what was the reason of server starting //like given below

// app.listen(port,(error)=>{
//     if(error){
//         console.log('Error in server',error); // will only give val if server doesnt starts, other wise errors val will be undefined
//     }
//     else{
//         console.log(`Server runnuig on port ${port}`);
//     }

    
// })



