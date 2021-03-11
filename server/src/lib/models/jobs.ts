import mongoose, { Schema } from "mongoose";

const jobSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    company: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    province: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    highlights: {
        type: Array,
        required: true
    },
    startingDate: {
        type: Date,
        default: new Date()
    },
    endingDate: {
        type: Date,
        default: undefined
    },
    createdOn: {
        type: Date,
        default: new Date()
    },
    updatedOn: {
        type: Date,
        default: new Date()
    }
});

const Job = mongoose.model("Job", jobSchema);
(async () => await Job.createCollection())();

export default Job;