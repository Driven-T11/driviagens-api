import { Router } from "express"
import { cityController } from "../controllers/cityController.js"
import { validateSchema } from "../middlewares/validateSchema.js"
import { citySchema } from "../schemas/citySchema.js"

const cityRouter = Router()

cityRouter.post("/cities", validateSchema(citySchema), cityController.create)

export default cityRouter