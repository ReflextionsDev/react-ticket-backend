const parsedError = (err) => {
    // ????
    let objKeys = Object.keys(err.keyValue)
    let objValue = Object.values(err.keyValue)

    // only works for one thing at a time
    return { [objKeys[0]]: `${objValue[0]} is already in use.`}
}

const errorHandler = (err) => {

    let message = ""

    console.log("error handler, code: ", err.code)
    console.log("error handler, key pattern: ", err.keyPattern)
    console.log("error handler, key value: ", err.keyValue)

    if (err.code) {
        switch (err.code) {
            // duplicate key error
            case 11000:
                message = parsedError(err)
                break;
            default:
                message = "something is wrong, contact support"
        }
    }
    return message
}

module.exports = {
    errorHandler,
}