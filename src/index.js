import express from 'express'

export default () => {
    try {
        const app = express();
        const port = 3000;

        app.listen(port, () => {
            console.log('un truc')
        })
    } catch(e) {
        console.error(e)
    }
}