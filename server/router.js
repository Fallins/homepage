import express from 'express'
import axios from 'axios'

const router = express.Router()
const PTT_SERVICE = process.env.PTT_SERVICE || "http://localhost:8888/"

// router.use((req, res, next) => {
//     console.log("Calling API at: " + Date.now())
//     next()
// })

router.get('/hotboards', (req, res) => {
    axios.get(PTT_SERVICE)
        .then(({data}) => {
            if(data)                  
                res.send(data)
            else
                throw new Error("Can't get data. Please try again later...")
        })
        .catch(err => {
            console.log(err)
            res.status(400).send(err)
        })
})

router.get('/posts/:count', (req, res) => {
    const {count} = req.params
    const {url} = req.query
    axios.get(`${PTT_SERVICE}list?url=${url}&count=${count}`)
        .then(({data}) => {
            if(data)                  
                res.send(data)
            else
                throw new Error("Can't get data. Please try again later...")
        })
        .catch(err => {
            console.log(err)            
            res.status(400).send(err)
        })
})

router.get('/post', (req, res) => {
    const {url} = req.query
    axios.get(`${PTT_SERVICE}post?url=${url}`)
        .then(({data}) => { 

            if(data && data.content){                  
                // console.log(data) 
                data.content = data.content.replace(/(\n\n)/gm, '<br /><br />')
                data.html = data.html.replace(/(\n\n)/gm, '<br /><br />')            
                                
                res.send(data)
            }else
                throw new Error("Can't get data. Please try again later...")
            
        })
        .catch(err => {
            console.log(err)
            res.status(400).send(err)
        })
})

export default router