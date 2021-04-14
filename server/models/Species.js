
import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId

const Species = new Schema(
  {
    species: { type: String, required: true },
    planets: { type: ObjectId, ref: 'Student', required: true },
    galaxy: { type: ObjectId, ref: 'Assignment', required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default Species;