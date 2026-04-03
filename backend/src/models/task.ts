import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: false },
    color: { type: String, require: true },
    date: { type: Date, require: true },
}, { timestamps: true });


export const taskModel = mongoose.model("Taks", taskSchema);

