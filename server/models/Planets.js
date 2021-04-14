import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Planets = new Schema(
  {
    name: { type: String, required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default Planets;