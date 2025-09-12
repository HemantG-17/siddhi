const Admin=require('../models/admin')
const bcrypt=require('bcrypt')
 async function saveAdmin(req,res){
    try{
        let admin = new Admin({
        username="Admin@123";
       encryptedPassword = await bcrypt.hash('12345',10);
        password= encryptedPassword;
    })
        await admin.save();
    }catch(err){
        console.log(err);
    }
}

    
 