import mongoose from "mongoose";
const connectDB = async () => {
  try {
    const conn = await mongoose.connect('mongodb+srv://anant:anant1506@cluster0.rkkycsk.mongodb.net/getmeachai', {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
  } catch (error) {
    process.exit(1);
  }
}
export default connectDB;