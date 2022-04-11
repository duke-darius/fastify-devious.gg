module.exports = function(mongoose) {
    const serverSchema = new mongoose.Schema({
        name: String,
        description: String,
        port: Number,
        voteURI: String,
        imageURI: String
    })

    const models = {
        Server : mongoose.model('Server', serverSchema)
    }
    return models
}