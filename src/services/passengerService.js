import { errors } from "../errors/errors.js"
import { passengerRepository } from "../repositories/passengerRepository.js"

async function create(firstName, lastName) {
    await passengerRepository.create(firstName, lastName)
}

async function findTravels(name) {
    const travels = await passengerRepository.findTravels(name)

    if (travels.length > 10) throw errors.tooManyResults()
 
    return travels
}

export const passengerService = { create, findTravels }