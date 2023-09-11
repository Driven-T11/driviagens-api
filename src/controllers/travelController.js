import httpStatus from "http-status"
import { travelService } from "../services/travelService.js"

async function create(req, res) {
    const { passengerId, flightId } = req.body

    await travelService.create(passengerId, flightId)
    res.sendStatus(httpStatus.CREATED)
}

export const travelController = { create }