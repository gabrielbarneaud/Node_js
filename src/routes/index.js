import { foodModel } from "../db/food";
import { commentModel } from "../db/comment";

export default (app) => {
    app.get('/', async (req, res) => {
        try {
            const products = await foodModel.find();
            res.status(200).json(products);
        } catch (err){
            console.log(err.message);
            return res.status(500).json({
                'error': true,
                'message': 'Error resquesting products !'
            })
        }
    });

    app.get('/product/:bar_code', async (req,res) => {
        const barCode = req.params.bar_code
        try {
            const product = await foodModel.findOne({bar_code: barCode});
            if (product)
                res.status(200).json(product);
            else {
                res.status(404).json({
                    'error': true,
                    'message': `No product with barcode ${barCode} found ..`
                })
            }
        } catch (err){
            console.log(err.message);
            return res.status(500).json({
                'error': true,
                'message': `Error resquesting product ${barCode} !`
            })
        }
    })

    app.post('/comment/:food_code', async (req,res) => {
        const food_code = req.params.food_code
        const product = await foodModel.findOne({bar_code: food_code});
        if (product)
            res.status(200).json(product);
        else {
            return(res.status(404).json({
                'error': true,
                'message': `No product with barcode ${food_code} found ..`
            }))
        }
        try{
            const{date,title,text} = req.body
            const request = new commentModel({date,title,text,food_code})
            const inserted = await request.save()

            if (inserted && inserted._id) {
                //insertion OK
                return res.json(inserted)
            }
            else {
                //insertion pas OK
                return res.status(500).json({
                    status: 'fail',
                    message: 'Le commentaire n a pas pu être inséré'
                })
            }
        }catch(err) {
            console.log(err.message)

            return res.status(500).json({
                error: 'true',
                message: 'Error inserting new comment'
            })
        }
    })

    app.post('/product', async (req,res) => {
        try{
            const {name,brand,bar_code,grade,quantity,pictures,ingredients} = req.body

            //préparation de la requête d'enregistrement
            const request = new foodModel({name,brand,bar_code,grade, quantity,pictures,ingredients})

            const inserted = await request.save()

            if (inserted && inserted._id) {
                //insertion OK
                return res.json(inserted)
            }
            else {
                //insertion pas OK
                return res.status(500).json({
                    status: 'fail',
                    message: 'Le produit n a pas pu être insérée'
                })
            }
        } catch(err) {
            console.log(err.message)

            return res.status(500).json({
                error: 'true',
                message: 'Error inserting new product'
            })
        }
    })

    app.get('/comments/:food_code', async (req,res) => {
        const food_code = req.params.food_code
        try {
            const comments = await commentModel.find({food_code: food_code});
            res.status(200).json(comments);
        } catch (err){
            console.log(err.message);
            return res.status(500).json({
                'error': true,
                'message': 'Error resquesting comments !'
            })
        }
    })
}