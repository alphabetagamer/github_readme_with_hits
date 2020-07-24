const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const db =  new sqlite3.Database('../db/views.db', (err) => {
    if (err) {
    }
    
  });
function check(rows,namerepo){
    return new Promise(function(res,rej){
    if(rows.length!=0){
        db.run("UPDATE views SET hits = hits + 1 WHERE repo ='"+namerepo+"'",(err,row)=>{
                    // console.log('updated')
                    res(rows[0].hits+1)
    })
}
    else{
        db.run("INSERT INTO views (repo) VALUES (?)",[namerepo],(err,rows)=>{
                    // console.log('newinsert')
                    // console.log(namerepo)
                    res(1)
                })
    }
})
}
function hits(namerepo){
    return new Promise(function(res,rej){
        db.all("SELECT hits FROM views WHERE repo ='"+namerepo+"'",(err,rows)=>{
            // console.log(rows.length)
            res(check(rows,namerepo))            
        })
})
}
const final_hits=async function(namerepo){
return new Promise(function(res,rej){
db.run(`CREATE TABLE IF NOT EXISTS views(id INTEGER PRIMARY KEY AUTOINCREMENT,repo TEXT UNIQUE,hits INTEGER DEFAULT 1)`,(err,pass)=>{
if(err){
    // console.log(err);
    res(-1)
}
else{

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
