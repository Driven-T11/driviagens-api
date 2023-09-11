import dayjs from "dayjs"
import { flightService } from "../services/flightService.js"
import httpStatus from "http-status"

async function create(req, res) {
    const { origin, destination, date } = req.body

    await flightService.create(origin, destination, date)
    res.sendStatus(httpStatus.CREATED)
}

async function findAll(req, res) {
    const { origin, destination, ['smaller-date']: smallerDate, ['bigger-date']: biggerDate } = req.query

    const flights = await flightService.findAll(origin, destination, smallerDate, biggerDate)

    const formattedFlights = flights.map(flight => {
        const date = dayjs(flight.date).format("DD-MM-YYYY")
        return { ...flight, date }
    })
    
    res.send(formattedFlights)
}


export const flightController = { create, findAll }