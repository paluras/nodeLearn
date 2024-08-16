import mongoose from 'mongoose'

export const connectDB = (url: string | undefined) => {
    return mongoose
        .connect(url!)
        .then(() => {
            console.log('connected to db')
        })
        .catch((err) => {
            console.log(err)
        })
}
export { }