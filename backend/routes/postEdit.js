import express from 'express';
import ArticleModel from '../models/articles';

const router = express.Router();

router.post('/', (req, res) => {
    console.log(req.body)
    // ArticleModel.findByIdAndRemove(req.body.ID, (err) => {
    //     if (err) {
    //         console.error(err);
    //     }});

    // ArticleModel.find((err, articles) => {
    //     res.json(articles.reverse());
    // });

});


export default router;