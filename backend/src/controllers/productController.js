import productModel from "../models/productModel.js";

// Create a new product
const createProduct = async (req,res)=>{
    try {
        const {name,description,price,barcode} = req.body;
        const pre = await productModel.findOne({barcode: barcode});
        console.log(pre);

        if(pre){
            return res.status(400).json({error: "Product with the same barcode already exists."});
        }else{
            const newProduct = new productModel(req.body);
            await newProduct.save();
            return res.status(200).send({success:true,message:"Product Added successfully.",data:newProduct});
        }
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

const updateProduct = async (req,res)=>{
     try {
        const {name,description,price,barcode} = req.body;
        const updatedProduct = await productModel.findOneAndUpdate({barcode: barcode}, {$set: req.body}, {new: true});
        if(!updatedProduct){
            return res.status(404).json({error: "Product not found."});
        }
        return res.status(200).send({success:true,message:"Product updated successfully.",data:updatedProduct});
    } catch (error) {
        res.status(400).json({error: error.message});
    }
};


const getAllProduct= async (req,res)=>{
    try{
        const products = await productModel.find();
        return res.status(200).send({success:true,message:"Products fetched successfully.",data:products});
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}


const getProductById = async (req,res)=>{
    try {
        const product = await productModel.findOne({barcode: req.params.id});
        if(!product){
            return res.status(404).json({error: "Product not found."});
        }
        return res.status(200).send({success:true,message:"Product fetched successfully.",data:product});
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}


const deleteProduct = async (req,res)=>{
    try {
        const deletedProduct = await productModel.findOneAndDelete({barcode: req.params.id});
        if(!deletedProduct){
            return res.status(404).json({error: "Product not found."});
        }
        return res.status(200).send({success:true,message:"Product deleted successfully.",data:deletedProduct});
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}


export {createProduct, updateProduct, getAllProduct ,getProductById ,deleteProduct}