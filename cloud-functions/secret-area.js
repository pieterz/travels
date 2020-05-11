exports.handler = function(events, context, callback) {
    callback(null, {
        statuscode: 200,
        body: "Welcome to the super secret area"
    })
}