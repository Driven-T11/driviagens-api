import { Router } from "express"
import cityRouter from "./cityRoutes.js"
import flightRouter from "./flightRoutes.js"
import passengerRouter from "./passengerRoutes.js"
import travelRouter from "./travelRoutes.js"

const router = Router()
router.use(cityRouter)
router.use(flightRouter)
router.use(passengerRouter)
router.use(travelRouter)

export default router