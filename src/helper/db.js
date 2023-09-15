import mongoose from "mongoose";
export const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB_URL, {
            dbName: "work_manager"
        })
        console.log("db connect");
    }
    catch (error) {
        console.log("fail");
        console.log(error);
    }
}