import mongoose from 'mongoose'

const foodSchema = new mongoose.Schema({
    _id: String,
    name: String,
    brand: String,
    bar_code: Number,
    grade: Number,
    pictures: [String],
    ingredients: [Object]
})

export const foodModel = mongoose.model('product', foodSchema, 'products')