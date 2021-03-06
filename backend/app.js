import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import Debug from 'debug';
import express from 'express';
import logger from 'morgan';
import sassMiddleware from 'node-sass-middleware';
import path from 'path';
// import favicon from 'serve-favicon';

import posts from './routes/post';
import postForm from './routes/postForm';
import postDel from './routes/postDel';
import postEdit from './routes/postEdit';
import postUser from './routes/postUser';
import singelPost from './routes/singelPost';
import mongoose from 'mongoose';

const mongoDB = 'mongodb://127.0.0.1:27017/blog';
mongoose.connect(mongoDB,  { useNewUrlParser: true });
const db = mongoose.connection;

// Check connection
db.once('open', () => {
    console.log('Connected to MongoDB');
});

// Check for DB errors
db.on('error', (err) => {
    console.log(err);
});

const app = express();
const debug = Debug('backend:app');
app.set('views', path.join(__dirname, 'views'));
// view engine setup
app.set('view engine', 'pug');
// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(cookieParser());
app.use(sassMiddleware({
  src: path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  indentedSyntax: true,
  sourceMap: true
}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/posts', posts);
app.use('/api/postsForm', postForm);
app.use('/api/postsEdit', postEdit);
app.use('/api/postsDel', postDel);
app.use('/api/postUser', postUser);
app.use('/api/', singelPost);


// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
/* eslint no-unused-vars: 0 */
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// Handle uncaughtException
process.on('uncaughtException', (err) => {
  debug('Caught exception: %j', err);
  process.exit(1);
});

export default app;
