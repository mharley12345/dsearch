const googleIt = require('google-it');
const router = require('express').Router()
const axios = require('axios')
const db = require('./data/db.config')
const orbitDbCache = require('orbit-db-cache')
router.get('/search',(req,res) =>{
        const term = req._parsedUrl.query
        console.log(req._parsedUrl)
 
    googleIt({query:term},'--limit 100`')
    .then(results =>{
        res.status(200).send(results)
    })
    .catch(err =>{console.error(err)})
})

router.get('/api' ,async (req,res) =>{
    const term = req._parsedUrl.query
      let hits = {}
    const hash = []

    axios.post(`https://api.ipfs-search.com/v1/search?${term}`)
    .then( async resp => {
       
    // let urls = resp.data.hits.map((hit)=>{return hit.hash})
    //     hash.push(urls)
    
  
      // console.log(hash)

    // const parsed = {keyword:(`${term}`).replace("q=",'')}
    // const respObj = {keyword:parsed.keyword,urls}
        
       
       return res.status(200).send(resp.data)
    
         }) 
 
    .catch(error => {console.error(error)})

})



module.exports = router