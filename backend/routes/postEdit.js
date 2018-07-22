import express from 'express';
import ArticleModel from '../models/articles';

const router = express.Router();

router.post('/', (req, res) => {
    ArticleModel.findByIdAndUpdate(req.body.ID, { title: req.body.postEditor[0], body: req.body.postEditor[1] },  (err, art) => {
    }).then(() => {
        ArticleModel.find((err, articles) => {
            res.json(articles.reverse());
        });
    });
    // let ID = req.body.ID;
    // ArticleModel.findByIdAndUpdate( ID, { popupEditor: req.body.postEditor}, (err, art) => {
    //     if(err){
    //         console.error(err);
    //     }
    // }).then(() => {
    //     ArticleModel.find((err, articles) => {
    //         res.json(articles.reverse());
    //     });
    //     // ArticleModel.findById( ID, (err, art) => {
    //     //     console.log(art)
    //     //     res.json(art);
    //     // });
    // });
});


export default router;