import { Router } from "express"
import { validateSchema } from "../middlewares/validateSchema.js"
import { travelSchema } from "../schemas/travelSchema.js"
import { travelController } from "../controllers/travelController.js"

const travelRouter = Router()

travelRouter.post("/travels", validateSchema(travelSchema), travelController.create)

export default travelRouter