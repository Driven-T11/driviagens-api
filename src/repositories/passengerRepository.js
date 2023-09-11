import { db } from "../configs/databaseConnection.js"

async function create(firstName, lastName) {
    await db.query(
        `INSERT INTO passengers ("firstName", "lastName") VALUES ($1, $2);`,
        [firstName, lastName]
    )
}

async function findById(id) {
    const passenger = await db.query(`SELECT * FROM passengers WHERE id=$1;`, [id])
    return passenger.rows[0]
}

async function findTravels(name) {
    const array = []
    let query = `
        SELECT CONCAT(p."firstName", ' ', p."lastName") AS "name", COUNT(t."passengerId") AS travels
            FROM passengers p
            LEFT JOIN travels t ON t."passengerId" = p.id
            WHERE 1=1
    `
    if (name) {
        array.push(`%${name}%`)
        query += `AND CONCAT(p."firstName", ' ', p."lastName") ILIKE $1 `
    }

    query += "GROUP BY p.id ORDER BY travels DESC;"

    const result = await db.query(query, array)
    return result.rows
}

export const passengerRepository = { create, findById, findTravels }