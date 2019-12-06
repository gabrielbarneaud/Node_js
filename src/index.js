import express from 'express'
import routes from './routes/index.js'
import InitDb from './db'

export default async () => {
    try {
        const app = express();

        await InitDb()
        routes(app)

        app.listen(process.env.PORT, () => {
            console.log(process.env.NODE_ENV)
        })
    } catch(e) {
        console.error(e)
    }
}