const mongoose = require('mongoose');

const connectDB = async () => {
    try{
        // mongodb connection string
        const con = await mongoose.connect(process.env.MONGO_URI, async(err)=>{
            if(err) throw err;
            console.log("conncted to db")
        }
            

           
        )

        console.log(`MongoDB connected : ${con.connection.host}`);
    }catch(err){
        console.log(err);
        process.exit(1);
    }
}

module.exports = connectDB