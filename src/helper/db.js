import mongoose from "mongoose";
const config = {
    isConnected: 0
}

export const connectDb = async () => {
    if (config.isConnected) {
        return;
    }
    try {
        const { connection } = await mongoose.connect(process.env.MONGO_DB_URL, {
            dbName: "work_manager"
        })
        console.log("db connect");
        // console.log(connection.readyState);
        config.isConnected = connection.readyState
    }
    catch (error) {
        console.log("fail");
        console.log(error);
    }
}