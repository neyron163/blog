import express from 'express';
import ArticleModel from '../models/articles';
import fs from 'fs';

const router = express.Router();

router.post('/', (req, res) => {
    ArticleModel.findById(req.body.ID, (err, art) => {
        console.log(art.image)
        fs.unlink('public/images/' + art.image, (err) => {
            if(err) throw err;
            // console.log('./public/images/' + art.image + 'was deleted');
        })
    })
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