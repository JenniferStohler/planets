  
import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId

const Stars = new Schema(
  {
    stars: { type: ObjectId, ref: 'Stars', required: true },
    galaxy: { type: ObjectId, ref: 'Galaxy', required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default Stars;