import mongoose, { Model, model, Schema } from 'mongoose';
import { IProduct } from '../interfaces';

const productSchema = new Schema({
    description: { type: String, required: true },
    images: [{ type: String }],
    inStock: { type: Number, required: true, default: 0 },
    price: { type: Number, required: true, default: 0 },
    sizes: [{
        type: String, enum: {
            values: ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
            message: '{VALUE} is not a valid size'
        }
    }],
    slug: { type: String, required: true, unique: true },
    tags: [{ type: String }],
    title: { type: String, required: true },
    type: [{ type: String }],
    gender: [{ type: String }]
},{
    timestamps:true
})

//TODO : Create index

const Product:Model<IProduct> = mongoose.models.Product || model('Product',productSchema)


export default Product