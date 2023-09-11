import { db } from "../configs/databaseConnection.js"

async function create(passengerId, flightId) {
    await db.query(
        `INSERT INTO travels ("passengerId", "flightId") VALUES ($1, $2);`,
        [passengerId, flightId]
    )
}

export const travelRepository = { create }