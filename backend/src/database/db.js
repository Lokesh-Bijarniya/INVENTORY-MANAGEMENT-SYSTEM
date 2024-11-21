import mongoose from "mongoose";

const dbConnection = () => {
    return mongoose.connect(process.env.MONGODB_URI)
      .then(() => console.log('Connected to Database'))
      .catch((err) => console.log('Database Connection Error:', err));
  };

export default dbConnection;