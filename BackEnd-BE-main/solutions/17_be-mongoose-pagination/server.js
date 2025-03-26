import express from "express";
import cors from "cors";
import { connectToDB } from "./libs/db.js";
import { seedDatabase } from "./libs/seedDatabase.js";
import listings from "./routes/listings.js";

await connectToDB();
await seedDatabase();

const port = 3001;
const app = express();

// Middleware stack
app.use(cors());
app.use(express.json());

// Middleware routes
app.use("/app/listings", listings);

app.listen(port, () => {
  console.log(`The server 🙈 is listening on port ${port}`);
});
