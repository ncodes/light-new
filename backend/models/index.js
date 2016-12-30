import mongoose from 'mongoose'
import Promise from 'bluebird'
import service from './service'


/**
 * Connect to mongo database
 * 
 * @export
 * @returns Promise
 */
function connectToMongo() {
    return new Promise(function(resolve, reject){
        mongoose.connect(light.config.database.MONGO_URL)
        mongoose.connection.on('error', function(err){
            return reject(err)
        }) 
        mongoose.connection.on('connected', function(){
            return resolve(reject)
        })
    })
}

export default {
    connectToMongo: connectToMongo,
    service: service
}