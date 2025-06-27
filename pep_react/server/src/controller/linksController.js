const Links = require("../model/Links");


const linksController = {
    //hm 6 functions bnayenge CRUD(4) , redirect(5),getId
    // ek niddleware bnayenge kyuki sirf loggend in user ko hi access ho
    create: async(request,response)=>{
        const {campaign_title,original_url,category} = request.body;
        try{
            const link = new Links({
                campaignTitle:campaign_title,
                originalUrl:original_url,
                category:category,
                user: request.user.id
            });

        await link.save();
        response.status(201).json({
            data:{id: link._id}, //?
            message: "link created"
        });

        }
        catch(error){
            console.log(error);
            return response.status(500).json({error:"internal server error 1"});

        }
    },
    getAll: async(request,response)=>{
        try{
            const links = await Links.find({user: request.user.id})
            .sort({createdAt:-1}); // -1 jo sbse phle creare ho goi wo sbse phle aygi

            return response.json({data: links});
        }
        catch(error){
            console.log(error);
            return response.status(500).json({error:"internal server error 2"});

        }
    },
    getById:async(request,response)=>{
         try{
            const linkId = request.params.id;
            if(!linkId){
                return response.status(401).json({error:"link is required"});
            }
            const link = await Links.findById(linkId);
            if(!link){
                return response.status(404).json({error:"link not found with given id "});
            }
            //makec sure user requesting  the access to thelink belons to the user
            if(link.user.toString()!== request.user.id){
                return response.status(403).json({error:"UnAuthorised"});
            }
            return response.json({data:link});
        }
        catch(error){
            console.log(error);
            return response.status(500).json({error:"internal server error 3"});

        }
    },
    update:async(request,response)=>{
         try{
            const linkId = request.params.id;
            if(!linkId){
                return response.status(401).json({error:"link is required"});
            }
            const link = await Links.findById(linkId);

            if(!link){
                return response.status(404).json({error:"link not found with given id "});
            }

             //makec sure user requesting  the access to thelink belons to the user
            if(link.user.toString()!== request.user.id){
                return response.status(403).json({error:"UnAuthorised"});
            } 
            const {campaign_title,original_url,category} = request.body;

            link = await Links.findByIdAndUpdate(linkId,{
                campaignTitle:campaign_title,
                originalUrl:original_url,
                category:category,
                
            },{new:true});

            response.json({data: link});

        }
        catch(error){
            console.log(error);
            return response.status(500).json({error:"internal server error 4"});

        }
    },
    delete:async(request,respons)=>{
         try{
                const linkId = request.params.id;
            if(!linkId){
                return response.status(401).json({error:"link is required"});
            }
            const link = await Links.findById(linkId);

            if(!link){
                return response.status(404).json({error:"link not found with given id "});
            }

             //makec sure user requesting  the access to thelink belons to the user
            if(link.user.toString()!== request.user.id){
                return response.status(403).json({error:"UnAuthorised"});
            } 
            await link.deleteOne();
            response.json({message: 'link deleted'});
        }
        catch(error){
            console.log(error);
            return response.status(500).json({error:"internal server error 5"});

        }
    },
    redirect:async(request,response)=>{
        // og url pai redirict kregea
         try{
              const linkId = request.params.id;
            if(!linkId){
                return response.status(401).json({error:"link is required"});
            }
            const link = await Links.findById(linkId);

            if(!link){
                return response.status(404).json({error:"link not found with given id "});
            }

            link.clickCount +=1;
            await link.save();

            response.redirect(link.originalUrl);
            
        }
        catch(error){
            console.log(error);
            return response.status(500).json({error:"internal server error 6"});

        }
    },

}

module.exports = linksController;