import { Router } from "express"
import { validateSchema } from "../middlewares/validateSchema.js"
import { passengerSchema } from "../schemas/passengerSchema.js"
import { passengerController } from "../controllers/passengerController.js"

const passengerRouter = Router()

passengerRouter.post("/passengers", validateSchema(passengerSchema), passengerController.create)
passengerRouter.get("/passengers/travels", passengerController.findTravels)

export default passengerRouter