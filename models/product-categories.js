import mongoose from 'mongoose'

const ProductCategorySchema = mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User',
        },
        name: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
)

const ProductCategory = mongoose.model('ProductCategory', ProductCategorySchema)

export default ProductCategory
