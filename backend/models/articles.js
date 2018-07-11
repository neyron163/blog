import mongoose from 'mongoose';

const Schema = mongoose.Schema;


const Article = new Schema({
    userId: Number,
    title: String,
    body: String
});


export default mongoose.model('ArticleModel', Article);