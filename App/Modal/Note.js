const Mongoose = require('mongoose')

const NoteSchema = new Mongoose.Schema({
    title:{
        type:String
    },
    body:{
        type:String
    },
    createdAt:{
        type:Date
    }
})

const Note = Mongoose.model("Note",NoteSchema)
module.exports = Note