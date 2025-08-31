import mongoose from "mongoose";



const noteSchema = new mongoose.Schema({
  content: {
    type: String,
    required: [true, "Content is required"],
    trim: true,
    minLength: 1,
    maxLength: 500
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'User is required']
  }
}, {
  timestamps: true
})


const Note = mongoose.model('Note', noteSchema);


export default Note;
