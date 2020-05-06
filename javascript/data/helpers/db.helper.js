const db = require('../db.config')

module.exports= {
    postUrls
}

async function postUrls(urls){
    return db("url")
        .insert(urls)
}