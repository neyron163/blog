import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Blog from './blog/Blog';
import 'semantic-ui-css/semantic.min.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Blog />, document.getElementById('root'));
registerServiceWorker();
