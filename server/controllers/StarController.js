import { starsService } from "../services/StarsService";
import BaseController from "../utils/BaseController";

export class StarsController extends BaseController {
  constructor() {
    super("api/Stars");
    this.router
      .post("", this.create)
      .delete("/:id", this.delete)
  }

  /**
   * Creates a cohortStudent from request body and returns it
   * @param {import("express").Request} req 
   * @param {import("express").Response} res 
   * @param {import("express").NextFunction} next 
   */
  async create(req, res, next) {
    try {
      const star = await starsService.create(req.body)
      res.send(star);
    } catch (error) {
      next(error);
    }
  }

  async delete(req, res, next) {
    try {
      let data = await starsService.delete(req.params.id)
      return res.send(data)
    } catch (error) {
      next(error)
    }
  }
}