import express from "express";
import 'dotenv/config';
import { PORT } from "./config/env.js";
import connectToDatabase from "./database/mongodb.js";


import authRouter from "./routes/auth.router.js";
import userRouter from "./routes/user.router.js";


const app = express();


app.use(express.json());


app.use('/api/v1/auth', authRouter);
app.use('/api/v1/users', userRouter);


app.get('/', (req, res) => res.send({ message: "Success" }));


app.listen(PORT, async () => { 
  console.log(`app is running on http://localhost:${PORT}`) 
  
  await connectToDatabase();
});


export default app;
