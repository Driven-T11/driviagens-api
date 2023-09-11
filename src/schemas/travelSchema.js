import joi from "joi"

export const travelSchema = joi.object({
    passengerId: joi.number().integer().min(1).required(),
	flightId: joi.number().integer().min(1).required(),
})