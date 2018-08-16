import express from 'express'
import path from 'path'
import morgan from 'morgan'
import helmet from 'helmet'
import router from './router'

const PORT = process.env.PORT || 5000
const app = express()

// use helmet to keep http header safe
app.use(helmet())

// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, '..', '/client/build')))

// log all request details
app.use(morgan('dev'))

app.use('/api', router)

// Anything that doesn't match the above, send back the index.html file
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'client/build/index.html'))
})



app.listen(PORT, () => console.log(`Express server is running on port ${PORT}`))