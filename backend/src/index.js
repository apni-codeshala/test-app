const express = require('express');
const dotenv = require('dotenv');
const connect = require("./config/index");
const ApiRoutes = require('./routes/index');

const app = express();
dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3000; // Default to port 3000 if PORT is not specified in .env

app.use('/api', ApiRoutes);

app.get('/', (req, res) => {
    res.status(200).json({ status: "Backend is working" });
});

app.listen(PORT, async () => {
    console.log("Server started at PORT:", PORT);

    try {
        await connect();
        console.log("DB connected successfully");
    } catch (error) {
        console.error("DB connection failed:", error.message);
        process.exit(1); // Exit the process if DB connection fails
    }
});
