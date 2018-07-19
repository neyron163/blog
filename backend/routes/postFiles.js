import express from 'express';
// import ArticleModel from '../models/articles';

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
    console.log(req.file)
});


export default router;