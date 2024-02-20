import { Users } from "@/models/user";
import mongoose from "mongoose";

//connect to database 

export const connectdb = async () => {

    try {

        const { connection } = await mongoose.connect(process.env.MONGO_DB_URL as string, {
            dbName: "Task1"
        });
        console.log("db is connected...");
        console.log(connection);


        //create a user in database...
        const uusers = new Users({
            username: "abhay",
            email: "abhay@gamil.com",
            password: "abhay72023"
        })
     

        await uusers.save();
     
      console.log("user is created.....👌")


    } catch (error) {
        console.log("db id not conneted...");
        console.log(error);

    }


}