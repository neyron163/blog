import React, {
    Component
} from 'react';
import './blog.css';

import {
    Provider
} from 'react-redux';
import store from './store';

import Header from './components/header/Header';
import Posts from './components/Posts';
import PostForm from './components/Postform';
import { Dropdown, Menu } from 'semantic-ui-react'
import { loadState, saveState } from './localStorage';

class Blog extends Component {
    constructor(props){
        super(props);
        this.state = {
            res: false
        } 
    }
    render() {
        store.subscribe(() => {
            let te;
            if(store.getState().enter.response){
                te = true;
            }
            saveState(te)
            // this.setState({ res: loadState() })
            console.log(loadState())
          });
        if(this.state.res){
            return (
                <Provider store={store}>
                        <div className="content">
                            <Header />
                            <PostForm />
                            <Posts getValueEdit={this.state.res} />
                        </div>
                </Provider>
            );
        }else{
            return (
                <Provider store={store}>
                        <div className="content">
                            <Header />
                            <Posts />
                        </div>
                </Provider>
            );
        }
    }
}

export default Blog;