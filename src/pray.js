// const final_hits = require("../src/views");

// async function name(){
// var g = await final_hits("lokin").then((res,rej)=>{
//     return res;
// })
// console.log("this is god",g)
// }
// name()
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uri = "mongodb+srv://user_name:password@cluster0.qj9o0.mongodb.net/collectioname?retryWrites=true&w=majority";
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log("MongoDB Connected…")
})
.catch(err => console.log(err))
// var conn = mongoose.connection;
const thingSchema = new Schema({"repo":{type:String},"hit":{type:Number}}, { strict: true })
const MyModel = mongoose.model('views',thingSchema,'views')
var final_hits=async function (namerepo){

var hits = await MyModel.findOne({"repo":namerepo,},function(err,res){
    return res
})
if(hits){
  await MyModel.updateOne({"repo":namerepo},{"hit":hits.hit+1})
  return hits.hit+1
}
else{
  await MyModel.create({'repo':namerepo , 'hit':1 })
  return 1
}
}

module.exports = final_hits;