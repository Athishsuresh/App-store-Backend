const mongoose = require('mongoose');

const appSchema = new mongoose.Schema({
    name: String,
    category: String,
    img: String
},
{collection: "app"}
)

const appDataModel = mongoose.model('', appSchema);

module.exports = appDataModel;