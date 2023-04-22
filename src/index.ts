import app from "./app";
import appDataSource from "./configs/db";
import "reflect-metadata";

const initApp = async () => {
  try {
    await appDataSource.initialize();
    const port = process.env.PORT || 3434;
    app.listen(port, () => console.log(`Server running on port ${port}`));
  } catch (error) {
    console.log(`Error running server: ${error}`);
  }
};

initApp();

export default app;
