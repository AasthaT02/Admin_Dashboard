// import mongoose from "mongoose";



// export const connectToDB = async () => {
//   const connection = {};
//   try {
//     if (connection.isConnected) return;
//     const db = await mongoose.connect(process.env.MONGODB_URI);
//     connection.isConnected = db.connections[0].readyState;
//   } catch (error) {
//     //console.log(error)
//     throw new Error(error);
//   }
// };

import mongoose from "mongoose";

let connection = {}; // ✅ Move outside the function

export const connectToDB = async () => {
  try {
    if (connection.isConnected) return;
    
    const db = await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    connection.isConnected = db.connections[0].readyState;
    console.log("✅ Database connected successfully");
  } catch (error) {
    console.error("❌ Database connection failed:", error);
    throw new Error(error);
  }
};
