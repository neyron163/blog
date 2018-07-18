import express from 'express';
import ArticleModel from '../models/articles';

import multer from 'multer';


const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, './uploads/');
    },
    filename: function(req, file, cb){
        cb(null, new Date().toISOString() + file.originalname);
    }
})
const upload = multer({ storage: storage });

const router = express.Router();

router.post('/', upload.single('myFile'), (err, req, res) => {
        if(err){
            console.error(err);
        }
        // create new model and save it after got data
        // const Article = new ArticleModel(req.body);
        console.log(req.file)
        // Article.save().then(() => {
            // we need send back single article of base
            // ArticleModel.find((err, art) => {
            //     res.json(art[art.length - 1])
            // });
        // });
});


export default router;