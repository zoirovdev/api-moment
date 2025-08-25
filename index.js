import express from "express";
import 'dotenv/config';



const app = express();


app.use(express.json());


app.get('/', (req, res) => res.send({ message: "Success" }));


app.listen(5000);
