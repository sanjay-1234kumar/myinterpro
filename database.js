const DB_URL=`mongodb+srv://user-name:password@name.fomjy.mongodb.net/MyFirstDB?retryWrites=true&w=majority`;


const mongoose=require('mongoose');



async function  DbConnect() {

   
try {
    await mongoose.connect(DB_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    });
    console.log(" we are coonected to databse db result ");

} catch (error) {
    
    console.log("error of db we are not connect with data base");

    console.log(error);
}
  
    
}


module.exports=DbConnect;