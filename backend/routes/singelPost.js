import express from 'express';
import ArticleModel from '../models/articles';

const router = express.Router();


const nameID = () => {
    ArticleModel.find((err, post) => {
        post.map(el => {
            el._id
        })
    });
//     numberSingelArticle = i;
//     return el.title.split(' ').join('-');
};
router.get(`/:${nameID()}`, (req, res) => {
    res.send('Hello')
    // res.json(articlesJson[numberSingelArticle]);
});

export default router;