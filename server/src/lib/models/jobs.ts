import mongoose, { Schema } from "mongoose";

const jobSchema = new Schema({
    title: String,
    company: String,
    city: String,
    province: String,
    country: String,
    highlights: Array,
    startingDate: {
        type: Date,
        default: new Date();
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