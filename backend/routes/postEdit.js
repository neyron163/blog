import express from 'express';
import ArticleModel from '../models/articles';

const router = express.Router();

router.post('/', (req, res) => {
    ArticleModel.findByIdAndUpdate(req.body.ID, { title: req.body.postEditor[0], body: req.body.postEditor[1] },  (err, art) => {
    }).then(() => {
        ArticleModel.find((err, articles) => {
            res.json(articles.reverse());
        });
    });
});


export default router;