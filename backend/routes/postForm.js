import express from 'express';
import articlesJson from '../models/articlesJson';
import ArticleModel from '../models/articles';

const router = express.Router();

router.post('/', (req, res, next) => {
    const Article = new ArticleModel(req.body)
    Article.save()
    setTimeout(function () {
        ArticleModel.find((err, art) => {
            res.json(art[art.length - 1])
        });
    });

});


export default router;