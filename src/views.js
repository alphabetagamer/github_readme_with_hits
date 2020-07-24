const sqlite3 = require('sqlite3').verbose();
const { logger } = require("./utils");
const path = require('path');
const db =  new sqlite3.Database('../db/views.db', (err) => {
    if (err) {
        logger.log(err)
        logger.log(path.resolve('../db/views.db'))
    }
    logger.log(err)
    logger.log(path.resolve('../db/views.db'))
  });
function check(rows,namerepo){
    return new Promise(function(res,rej){
        const db =  new sqlite3.Database('../db/views.db', (err) => {
            if (err) {
                logger.log(err)
                logger.log(path.resolve('../db/views.db'))
            }
          });
    if(rows.length!=0){
        db.run("UPDATE views SET hits = hits + 1 WHERE repo ='"+namerepo+"'",(err,row)=>{
            if(err){
                logger.log("error in check/update",err);
            }
                    // console.log('updated')
                    res(rows[0].hits+1)
    })
}
    else{
        db.run("INSERT INTO views (repo) VALUES (?)",[namerepo],(err,rows)=>{
                if(err){
                    logger.log("error in check/insert",err);
                }
                    // console.log('newinsert')
                    // console.log(namerepo)
                    res(1)
                })
    }
})
}
function hits(namerepo){
    return new Promise(function(res,rej){
        const db =  new sqlite3.Database('../db/views.db', (err) => {
            if (err) {
                logger.log(err)
                logger.log(path.resolve('../db/views.db'))
            }
          });
        db.all("SELECT hits FROM views WHERE repo ='"+namerepo+"'",(err,rows)=>{
            if(err){
                logger.log("error in hits",err);
            }
            // console.log(rows.length)
            res(check(rows,namerepo))            
        })
})
}
const final_hits=async function(namerepo){
    logger.log("In final_hits");
    logger.log(path.resolve('../db/views.db'))
    logger.log(path.resolve('./db/views.db'))
    logger.log(path.resolve('db/views.db'))   
return new Promise(function(res,rej){
const db =  new sqlite3.Database('../db/views.db', (err) => {
    if (err) {
        logger.log(err)
        logger.log(path.resolve('../db/views.db'))
    }
    });
db.run(`CREATE TABLE IF NOT EXISTS views(id INTEGER PRIMARY KEY AUTOINCREMENT,repo TEXT UNIQUE,hits INTEGER DEFAULT 1)`,(err,pass)=>{
if(err){
    logger.log("error in final_hits",err);
    // console.log(err);
    db.close()
    res(-1)
}
else{
    db.close()
    logger.log("updated db sending return")
    res(hits(namerepo))
    
    // console.log("passed create")

}
})
})

}
// final_hits("gamer").then((res,rej)=>{
//     console.log(res)
// })

module.exports = final_hits;
