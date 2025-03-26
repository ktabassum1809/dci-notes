
import {model,Schema} from 'mongoose'

const recordSchema=new Schema({

title:String,
artist:{type:String},
img:String,
year:Number,
price:Number,
genre:String

})

export const Record=model('record',recordSchema)