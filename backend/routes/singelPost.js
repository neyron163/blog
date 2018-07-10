// import express from 'express';
// import articlesJson from '../models/articlesJson';

// const router = express.Router();

// let numberSingelArticle;

// const nameID = articlesJson.map((el, i) => {

//     numberSingelArticle = i;
//     return el.title.split(' ').join('-');

// });

// router.get(`/:${nameID}`, (req, res) => {
//     res.json(articlesJson[numberSingelArticle]);
// });

// export default router;