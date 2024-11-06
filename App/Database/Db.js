const Mongoosee = require('mongoose')

const SetUpDb = async () =>{
    try{
    const connect = await Mongoosee.connect(`mongodb+srv://Naveen:${process.env.MONGODBPASSWORD}@cluster0.rrtnxw8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)
    if(connect){
        console.log('Connected to the DataBase')
    }


    }
    catch(err){
        throw new DataBaseError(err)
    }
}




module.exports = SetUpDb