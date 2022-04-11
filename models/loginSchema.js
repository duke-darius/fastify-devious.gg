module.exports = function(mongoose) {
    const loginSchema = new mongoose.Schema({
        username: String,
        password: String,
        role: String
    })
    

    const models = {
        Login : mongoose.model('Login', loginSchema)
    }
    return models
}