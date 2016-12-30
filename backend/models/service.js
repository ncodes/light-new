// Service.js defines a service model
import mongoose from 'mongoose'
import Promise from 'bluebird'

let ServiceSchema = new mongoose.Schema({
    User: mongoose.Schema.Types.ObjectId,
    Name: String,
    ClientID: String,
    ClientSecret: String,
    CreatedAt: Date,
    UpdatedAt: Date
})


/**
 * findOneByField will find a service by a single field
 * 
 * @param field String the field name
 * @param value String the field value
 * @return Promise
 */
ServiceSchema.statics.findOneByField = async function findByField(field, value) {
    return new Promise((resolve, reject) => {
        let q = {}
        q[field] = value
        this.findOne(q, (err, service) => {
            if (err) return reject(err)
            return resolve(service)
        })
    })
}


export default mongoose.model('Service', ServiceSchema)

