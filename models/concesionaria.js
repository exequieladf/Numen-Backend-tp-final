const {Schema, model} = require('mongoose');

const schema = new Schema ({
    marca:{
        type:String,
        required: true
    },
    modelo:{
        type:String,
        required: true
    },
    año:{
        type:Number,
        required: true
    },
    nuevo:{
        type:Boolean,
        required: true
    },
    combustible: {
        type:String,
        required: true,
        emun: ['nafta', 'gas']
    }
})

const Concesionaria = model('Concesionaria', schema);
module.exports = { Concesionaria  }