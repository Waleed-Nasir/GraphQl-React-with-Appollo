const mongoose = require('mongoose')
const Schema = mongoose.Schema


const CollectionData = new Schema({

        id:String,
        name:String,
        company:String
});

module.exports = mongoose.model('Collection',CollectionData);