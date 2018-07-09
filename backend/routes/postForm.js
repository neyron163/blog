import express from 'express';
import articlesJson from '../models/articlesJson';

const router = express.Router();

router.post('/', (req, res) => {
    articlesJson.unshift(req.body);
    
    res.json(articlesJson[0])
});

export default router;