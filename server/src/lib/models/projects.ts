import mongoose, { Schema } from "mongoose";

export const projectSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: true
    },
    areas: {
        type: Array,
        required: true
    },
    highlights: {
        type: Array,
        required: true
    },
    createdOn: {
        type: Date,
        required: true,
        default: new Date()
    },
    updatedOn: {
        type: Date,
        required: true,
        default: new Date()
    }
});

const Project = mongoose.model("Project", projectSchema);
(async () => await Project.createCollection())();

export default Project;