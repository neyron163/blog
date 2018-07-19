import express from 'express';
import ArticleModel from '../models/articles';
import fs from 'fs';

const router = express.Router();

router.post('/', (req, res) => {
    ArticleModel.findById(req.body.ID, (err, art) => {
        fs.unlink('public/images/' + art.image, (err) => {})
    })
    ArticleModel.findByIdAndRemove(req.body.ID, (err) => {
        if (err) {
            console.error(err);
        }
    }).then(() => {
        ArticleModel.find((err, articles) => {
            res.json(articles.reverse());
        });
    });
});


export default router;