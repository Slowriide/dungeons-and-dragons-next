import dotenv from "dotenv";
dotenv.config({ path: ".env" });

console.log("DATABASE_URL =", process.env.DATABASE_URL);
