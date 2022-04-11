module.exports = function(mongoose) {
    const staffSchema = new mongoose.Schema({
        name: String,
        rank: String,
        ImageURI: String
    })

    const models = {
        Staff : mongoose.model('Staff', staffSchema)
    }
    return models
}