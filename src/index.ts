import app from "./app";
import "reflect-metadata";

const initApp = async () => {
  try {
    const port = process.env.PORT || 3434;
    app.listen(port, () => console.log(`Server running on port ${port}`));
  } catch (error) {
    console.log(`Error running server: ${error}`);
  }
};

initApp();

export default app;
