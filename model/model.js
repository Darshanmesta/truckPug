const mongoose=require('mongoose')
const Schema=mongoose.Schema

let Product= new Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    select:{type:String,required:true},
    phone:{type:Number,required:true},
    desc:{type:String,required:true},
    image:{type:String,required:true},
    truckmodel:{type:String,required:true},


    

   

},
{
    collection:"mycollection"
})



module.exports=mongoose.model('Product',Product)