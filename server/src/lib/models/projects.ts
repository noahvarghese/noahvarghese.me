import mongoose, { Schema } from "mongoose";

export const projectSchema = new Schema({
    name: String,
    url: String,
    areas: Array,
    highlights: Array,
    createdOn: {
        type: Date,
        default: new Date()
    },
    updatedOn: {
        type: Date,
        default: new Date()
    }
});

const Project = mongoose.model("Project", projectSchema);
(async () => await Project.createCollection())();

export default Project;