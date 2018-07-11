import express from 'express';
import ArticleModel from '../models/articles';

const router = express.Router();

router.post('/', (req, res) => {
        // create new model and save it after got data
        const Article = new ArticleModel(req.body);
        Article.save().then(() => {
            // we need send back single article of base
            ArticleModel.find((err, art) => {
                res.json(art[art.length - 1])
            });
        });
});


export default router;