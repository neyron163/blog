import express from 'express';
import ArticleModel from '../models/articles';

const router = express.Router();

const Article = ArticleModel({
    postID: 1,
    title: 'Aute eu meatloaf esse.',
    body: 'Est swine jowl irure non.  Kielbasa anim pancetta qui officia jerky tri-tip est.  Landjaeger exercitation cillum et occaecat quis qui laborum prosciutto pork.  Dolore capicola laboris jerky, in sed drumstick pork loin beef ribs id porchetta sausage.'
});

/* GET index page. */
router.get('/', (req, res) => {
  res.json([Article])
});

export default router;
