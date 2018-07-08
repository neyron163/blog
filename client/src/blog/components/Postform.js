import React, { Component } from 'react';

class Postform extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: '',
      body: ''
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(e){
    this.setState({[e.target.name]: e.target.value});
  }
  onSubmit(e){
    e.preventDefault();

    const post = {
      title: this.state.title,
      body: this.state.body
    }

    fetch('/posts', {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(post)
    })
    .then(res => res.json())
    .then(data => console.log(data));
    
  }
  render() {
    return (
      <div>
        <h1>Add Post</h1>
        <form onSubmit={this.onSubmit}>
          <div>
            <label>Title: </label><br />
            <input type="text" name="title" onChange={this.onChange} value={this.state.title}/>
          </div>
          <div>
            <label>Body: </label><br />
            <textarea name="body" value={this.state.body} onChange={this.onChange}/>
          </div>
          <br />
          <button type='sumbmit'>Sumbmit</button>
        </form>
      </div>
    );
  }
}

export default Postform;