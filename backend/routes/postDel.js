import express from 'express';
import ArticleModel from '../models/articles';
import fs from 'fs';
import find from 'find';

const router = express.Router();

router.post('/', (req, res) => {
    ArticleModel.findById(req.body.ID, (err, art) => {
        find.file('public/images/', (files) => {
            for(let i = 0; i < files.length; i++){
                if(files[i] === 'public/images/' + art.image){
                    fs.unlink('public/images/' + art.image, (err) => {})
                }
            }
        })
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