import { Router } from "express";





const noteRouter = Router();


noteRouter.get("/", (req, res) => res.json({ message: "GET all notes" }));

noteRouter.get("/:id", (req, res) => res.json({ message: "GET single note" }));

noteRouter.post("/", (req, res) => res.json({ message: "CREATE a new note" }));

noteRouter.put("/:id", (req, res) => res.json({ message: "UPDATE an exist user" }));

noteRouter.delete("/:id", (req, res) => res.json({ message: "DELETE an exist user" }));


export default Router;
