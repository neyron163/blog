import express from 'express';
import articlesJson from '../models/articlesJson';
import ArticleModel from '../models/articles';

const router = express.Router();
router.get('/', (req, res) => {
    ArticleModel.find((err, Articles) => {
        res.json(Articles.reverse())
    })
});

export default router;