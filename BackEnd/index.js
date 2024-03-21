import express from "express";
import cors from "cors";

const app = express();

app.use(cors());

const PORT = 4040 ;

app.listen(PORT, () =>
    console.log(`Server is running on http://localhost:${PORT}`)
);