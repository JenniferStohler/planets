import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class StarsService {
  async findStars(query) {
    let data = await dbContext.Stars.find(query).populate('star')
    // @ts-ignore
    return data.map(d => d.star)
  }
  async findGalaxy(query) {
    let data = await dbContext.Stars.find(query).populate('galaxy')
    return data
  }
  async create(body) {
    return await dbContext.Stars.create(body)
  }
  async edit(body) {
    let data = await dbContext.Stars.findOneAndUpdate({ _id: body.id }, body, { new: true })
    if (!data) {
      throw new BadRequest("Invalid Id")
    }
    return data
  }
  async delete(id) {
    let data = await dbContext.Stars.findOneAndDelete({ _id: id })
    if (!data) {
      throw new BadRequest("Invalid Id")
    }
    return "Successfully Deleted"
  }

}

export const starsService = new StarsService();