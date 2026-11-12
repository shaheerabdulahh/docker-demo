const express = require("express");
const { PrismaClient } = require("@prisma/client");


const app = express();
const prisma = new PrismaClient();


app.use(express.json());


// Basic API route
app.get("/", (req, res) => {
  res.json({
    message: "Express API is running inside Docker!"
  });
});


// Health check
app.get("/health", (req, res) => {
  res.json({
    status: "OK",
    message: "Server is healthy"
  });
});


// Test Prisma Client and database connection
app.get("/db-check", async (req, res) => {
  try {
    await prisma.$queryRaw`SELECT 1`;

    res.json({
      status: "OK",
      message: "Prisma Client is working and database is reachable"
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      status: "ERROR",
      message: "Database connection failed"
    });
  }
});

const PORT = 3000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});


// Graceful shutdown
process.on("SIGTERM", async () => {
  await prisma.$disconnect();
  process.exit(0);
});