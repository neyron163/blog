import mongoose from 'mongoose';

const Schema = mongoose.Schema;


const Article = new Schema({
    userId: Number,
    title: String,
    body: String,
    image: String,
    popupEditor: Boolean,
    likes: Number
});


export default mongoose.model('ArticleModel', Article);