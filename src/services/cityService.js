import { errors } from "../errors/errors.js"
import { cityRepository } from "../repositories/cityRepository.js"

async function create(cityName) {
    const city = await cityRepository.findByName(cityName)
    if (city) throw errors.conflict("city")

    await cityRepository.create(cityName)
}

export const cityService = { create }