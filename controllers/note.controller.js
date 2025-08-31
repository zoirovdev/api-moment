import Note from "../models/note.model.js";




export const getNotes = async (req, res, next) => {
  try {
    const notes = await Note.find().populate('user');

    res.status(200).json({ data: notes });
  } catch (error) {
    next(error);
  }
};


export const getNote = async (req, res, next) => {
  try {
    const note = await Note.findById(req.params.id);

    if(!note) {
      const error = new Error("Note not found");
      error.statusCode = 404;
      throw error; 
    }

    res.status(200).json({ data: note });
  } catch (error) {
    next(error);
  }
};


export const createNote = async (req, res, next) => {
  try {
    const { content, user } = req.body;
    
    const newNote = await Note.create({
      content: content,
      user: user
    }); 

    if(!newNote) {
      const error = new Error("Note couldn't be created");
      error.statusCode = 400;
      throw error;
    }

    res.status(201).json({ data: newNote });
  } catch (error) {
    next(error);
  }
};


export const updateNote = async (req, res, next) => {
  try {
    const { content } = req.body;
    if (!content) {
      const error = new Error("Content is required");
      error.statusCode = 400;
      throw error;
    }

    const existNote = await Note.findById(req.params.id);
    if(!existNote) {
      const error = new Error("Note not found");
      error.statusCode = 404;
      throw error;
    }
    
    existNote.content = content;
    await existNote.save();

    res.status(200).json({ data: existNote });
  } catch (error) {
    next(error);
  }
};


export const deleteNote = async (req, res, next) => {
  try {
    const existNote = await Note.deleteOne({ _id: req.params.id });
    if(!existNote) {
      const error = new Error("Note couldn't be deleted");
      error.statusCode = 403;
      throw error;
    }

    res.status(200).json({ data: "Note deleted sucessfully" });
  } catch (error) {
    next(error);
  }
};
