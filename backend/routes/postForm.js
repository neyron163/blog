import express from 'express';
import articlesJson from '../models/articlesJson';

const router = express.Router();

router.post('/', (req, res) => {
    articlesJson.push(req.body);
    res.json(articlesJson[articlesJson.length - 1])
});

export default router;