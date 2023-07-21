const mongoose = require("mongoose");

const connectDB = async () => {
  // let a = 'mongodb+srv://Kishor6941:Kishor1234%23@kishordb.y04f5cg.mongodb.net/devCamper?retryWrites=true&w=majority'
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {});

    console.log(
      `MongoDB connected ${conn.connection.host}`.cyan.underline.bold
    );
  } catch (err) {
    console.log(`${err.message}`.red);
  }
};

module.exports = connectDB;
