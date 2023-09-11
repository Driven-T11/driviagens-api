function notFound(resource = "Item") {
    console.log("oiee")
    return {
        type: "notFound",
        message: `${resource} not found!`
    }
}

function conflict(resource = "item") {
    return {
        type: "conflict",
        message: `This ${resource} has already been added!`
    }
}

function equalCities() {
    return {
        type: "conflict",
        message: `The destination can't be equal to the origin city!`
    }
}

function wrongData() {
    return {
        type: "wrongData",
        message: `The fields are wrong!`
    }
}

function invalidFlightDate() {
    return {
        type: "wrongData",
        message: `Flight date needs to be greater than today!`
    }
}

function invalidTravelDate() {
    return {
        type: "wrongData",
        message: `bigger-date needs to be greater than smaller-date!`
    }
}

function invalidTravelDateAmount() {
    return {
        type: "badRequest",
        message: `Both bigger-date and smaller-date needs to be passed!`
    }
}

function tooManyResults() {
    return {
        type: "tooManyResults",
        message: `Exceeded 10 travels limit`
    }
}

export const errors = {
    notFound,
    conflict,
    wrongData,
    equalCities,
    invalidFlightDate,
    invalidTravelDate,
    invalidTravelDateAmount,
    tooManyResults
}