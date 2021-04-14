import { starsService } from "../services/StarsService";
import { planetsService } from "../services/PlanetsService";
import { moonService } from "../services/MoonService";
import { speciesService } from "../services/SpeciesService"
import BaseController from "../utils/BaseController";

export class GalaxyController extends BaseController {
  constructor() {
    super("api/galaxy");
    this.router
      .get("", this.getAll)
      .get("/:id", this.getById)
      .get("/:id/star", this.getStarsByGalaxyId)
      .get("/:id/planet", this.getPlanetsByGalaxyId)
      .post("", this.create)
      .put("/:id", this.edit)
      .delete("/:id", this.delete)
  }



  /**
   * Sends found cohorts to a client by request
   * @param {import("express").Request} req 
   * @param {import("express").Response} res 
   * @param {import("express").NextFunction} next 
   */
  async getAll(req, res, next) {
    try {
      const galaxy = await galaxyService.find(req.query)
      return res.send(galaxy);
    } catch (error) {
      next(error);
    }
  }

  /**
   * Sends found cohort to a client by request provided the Id from params
   * @param {import("express").Request} req 
   * @param {import("express").Response} res 
   * @param {import("express").NextFunction} next 
   */
  async getById(req, res, next) {
    try {
      const galaxy = await galaxyService.findOne({ _id: req.params.id })
      return res.send(galaxy);
    } catch (error) {
      next(error);
    }
  }
  /**
   * Sends found assignments to a client by request provided the Id from params for the cohort
   * @param {import("express").Request} req 
   * @param {import("express").Response} res 
   * @param {import("express").NextFunction} next 
   */
  async getMoonByGalaxyId(req, res, next) {
    try {
      const moon = await moonService.find({ galaxy: req.params.id })
      return res.send(moon)
    } catch (error) {
      next(error)
    }
  }

  /**
 * Sends found assignments to a client by request provided the Id from params for the cohort
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 * @param {import("express").NextFunction} next 
 */
  async getPlanetsByGalaxyId(req, res, next) {
    try {
      const planet = await planetsService.findPlanets({ galaxy: req.params.id })
      return res.send(planet)
    } catch (error) {
      next(error)
    }
  }


  /**
   * Creates a cohort from request body and returns it
   * @param {import("express").Request} req 
   * @param {import("express").Response} res 
   * @param {import("express").NextFunction} next 
   */
  async create(req, res, next) {
    try {
      const galaxy = await galaxyService.create(req.body)
      res.send(galaxy);
    } catch (error) {
      next(error);
    }
  }

  async edit(req, res, next) {
    try {
      req.body.id = req.params.id
      let data = await galaxyService.edit(req.body)
      return res.send(data)
    } catch (error) {
      next(error)
    }
  }
  async delete(req, res, next) {
    try {
      let data = await galaxyService.delete(req.params.id)
      return res.send(data)
    } catch (error) {
      next(error)
    }
  }
}