import mongoose, { ConnectOptions } from "mongoose";
import { cyan, red } from "colors";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI!, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    } as ConnectOptions);
    console.log(cyan(`MongoDB Connected: ${conn.connection.host}`).underline);
  } catch (error) {
    console.log(red(`Error: ${(error as Error).message}`).red.underline.bold);
    process.exit(1);
  }
};
