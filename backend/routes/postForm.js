import express from 'express';
import ArticleModel from '../models/articles';

import multer from 'multer';


const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, './public/images');
    },
    filename: function(req, file, cb){
        cb(null, file.originalname);
    }
})
const upload = multer({ storage: storage });

const router = express.Router();

router.post('/', upload.single('myFile'), (req, res) => {
        // create new model and save it after got data
        const Article = new ArticleModel(req.body);
        // console.log(req.file)
        Article.save().then(() => {
            // we need send back single article of base
            ArticleModel.find((err, art) => {
                res.json(art[art.length - 1])
            });
        });
});


export default router;