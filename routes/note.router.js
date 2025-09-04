import { Router } from "express";
import { 
createNote, 
updateNote, 
deleteNote,
getNotes, 
getNote, 
searchNotes 
} from "../controllers/note.controller.js";
import { authorize } from "../middlewares/auth.middleware.js";



const noteRouter = Router();


noteRouter.get("/", getNotes);

noteRouter.get("/search", authorize, searchNotes);

noteRouter.get("/:id", authorize, getNote);

noteRouter.post("/", authorize, createNote);

noteRouter.put("/:id", authorize, updateNote);

noteRouter.delete("/:id", authorize, deleteNote);




export default noteRouter;
