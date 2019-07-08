import React, { Component } from 'react';
import './Comment.css';

class Comment extends Component {
  render() {
    return (
      <div className="comment">  
        <div className="user">
          <img className="avatar" src={this.props.comment.author.avatar}></img>
        </div>
        <div className="content">
          <p>
            <b>{this.props.comment.author.name}</b>
            {' ' + this.props.comment.content}
          </p>
        </div>
      </div>
    )
  }
}

export default Comment;