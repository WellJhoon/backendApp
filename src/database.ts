import { connect } from "mongoose";

export async function startConnection() {
  const db = await connect(
    "mongodb+srv://jhon437699:C6cCXd2ZjKhuCJYN@cluster0.llyb1o5.mongodb.net/?retryWrites=true&w=majority"
  );
  console.log("Database is connected");
}
