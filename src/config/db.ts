import mongoose from 'mongoose'
const moongoURL = "mongodb://localhost:27017/"


export default (async () => {
    try {
        await mongoose.connect(moongoURL)
        console.log('mongo db connect')
    } catch (error) {
        console.log('error:', error)
        process.exit(1);
    }
})()