import express from 'express';
import ArticleModel from '../models/articles';

const router = express.Router();


router.get('/api/article/:id', (req, res) => {
    ArticleModel.find((err, art) => {
        art.map(el => {
            if(req.params.id == el._id){
                res.send([el])
            }
        });
    });
});

export default router;