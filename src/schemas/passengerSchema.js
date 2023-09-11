import joi from "joi"

export const passengerSchema = joi.object({
    firstName: joi.string().required().min(2).max(100),
    lastName: joi.string().required().min(2).max(100)
})