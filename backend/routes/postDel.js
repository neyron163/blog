import express from 'express';
import articlesJson from '../models/articlesJson';
import ArticleModel from '../models/articles';

const router = express.Router();

router.post('/', (req, res) => {
    console.log(req.body.ID)
    ArticleModel.findByIdAndRemove(req.body.ID, (err, or) => {
        if (err) {
            console.error(err);
        }
    });

    ArticleModel.find((err, articles) => {
        res.json(articles);
    })

    // articlesJson.unshift(req.body);
    // res.json(articlesJson[0]);

    // const Article = new ArticleModel(req.body)
    // Article.save()
    // console.log(req.body)
});


export default router;