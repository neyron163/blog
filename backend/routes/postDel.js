import express from 'express';
import ArticleModel from '../models/articles';

const router = express.Router();

router.post('/', (req, res) => {
    ArticleModel.findByIdAndRemove(req.body.ID, (err) => {
        if (err) {
            console.error(err);
        }}).then(() => {
            ArticleModel.find((err, articles) => {
                res.json(articles.reverse());
            });
        });
});


export default router;