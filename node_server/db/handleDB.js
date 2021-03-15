const db = require("./db");


async function handleDB(res,sql) {
    try{
        var result = await new Promise((resolve,reject)=>{
            db.query(sql,(error ,data)=>{
                if(error){
                    reject(error);
                }
                resolve(data);
            })
        })
    }catch(err){
        res.send(err);
        
    }
    return result;
}

module.exports = handleDB;