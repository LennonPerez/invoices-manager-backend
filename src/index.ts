import app from "./configs/app";
import dotenv from "dotenv";
import { AppDataSource } from "./configs/db";

dotenv.config();

const initApp = async () => {
  try {
    await AppDataSource.initialize();
    const port = process.env.SERVER_PORT;
    app.listen(port, () => console.log(`Listening port ${port}`));
  } catch (error) {
    console.log(`Error running server: ${error}`);
  }
};

initApp();
