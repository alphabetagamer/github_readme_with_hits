const mongoose = require('mongoose');
const { logger } = require("./utils");
const Schema = mongoose.Schema;
const uri = "mongodb+srv://"+process.env['mongo_user']+":"+process.env['mongo_password']+"@cluster0.qj9o0.mongodb.net/"+process.env['mongo_col']+"?retryWrites=true&w=majority";
// const uri = "mongodb+srv://username:password@clusterid.mongodb.net/collectionaname?retryWrites=true&w=majority";
// var conn = mongoose.connection;
const thingSchema = new Schema({"repo":{type:String},"hit":{type:Number}}, { strict: true })
const MyModel = mongoose.model('views',thingSchema,'views')
var final_hits=async function (namerepo){
await mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
      })
      .then(() => {
        logger.log("MongoDB Connected…")
      })
      .catch(err => logger.log(err))
logger.log(process.env['mongo_user'])
logger.log(process.env['mongo_password'])
logger.log(process.env['mongo_col'])
var hits = await MyModel.findOne({"repo":namerepo,},function(err,res){
    return res
})
if(hits){
  await MyModel.updateOne({"repo":namerepo},{"hit":hits.hit+1})
  logger.log("updated views")
  return hits.hit+1
  
}
else{
  await MyModel.create({'repo':namerepo , 'hit':1 })
  logger.log('created new input for',namerepo)
  return 1
}
}
final_hits("lokin")
module.exports = final_hits;