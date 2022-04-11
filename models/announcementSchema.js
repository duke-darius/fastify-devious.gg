module.exports = function(mongoose) {
    const announcementSchema = new mongoose.Schema({
        title: String,
        Description: String
    })
    const models = {
        Announcement : mongoose.model('Announcement', announcementSchema)
    }
    return models
}