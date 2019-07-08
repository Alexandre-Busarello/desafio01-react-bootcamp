import React, { Component } from 'react';
import Comment from '../Comment';

import './Post.css';

class Post extends Component {
  render() {
    return (
      <div className="post">  
        <div className="user">
          <img className="avatar" src={this.props.post.author.avatar}></img>
          <div className="info">
            <span className="name">{this.props.post.author.name}</span>
            <span className="date">{this.props.post.date}</span>
          </div>
        </div>
        <div className="content">
          <p>
            {this.props.post.content}
          </p>
        </div>
        <hr></hr>
        {
          this.props.post.comments.map(comment => (
            <Comment id={comment.id} comment={comment} />
          ))
        }       
      </div>
    )
  }
}

export default Post;