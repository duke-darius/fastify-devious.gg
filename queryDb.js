const fs = require('fs')
const path = require('path');
const mongoose = require('mongoose');

async function connect() {
    try {
        let models = {}
        await mongoose.connect('mongodb://127.0.0.1:27017/testdb');
        console.log("Connected to DB")
        fs.readdirSync("./models").filter(e => e.endsWith(".js")).forEach(e => {
            models[path.parse(e).name] = require(`./models/${e}`)(mongoose)
        })
        return models
    } catch (error) {
        throw new Error(error)
    }
}

function buildFromModel(model, options) {
    return new model(options)
}

function save(model) {
    model.save()
}

async function queryModel(model, options) {
    return model.find(options)
}

module.exports = {
    mongoose: {
        mongoose: mongoose,
    },
    db: {
        connect: connect,
        buildFromModel: buildFromModel,
        save: save,
        queryModel: queryModel
    }
}
