import mongoose from "mongoose";



const noteSchema = new mongoose.Schema({
  content: {
    type: String,
    required: [true, "Content is required"],
    trim: true,
    minLength: 1,
    maxLength: 500
  }
}, {
  timestamps: true
})


const Note = mongoose.model('Note', noteSchema);


export default Note;
