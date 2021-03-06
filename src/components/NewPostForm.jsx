import React, {Component} from 'react';
import {Link,Redirect} from 'react-router-dom';
import postIcon from '../assets/post-icon.png';
var moment = require('moment');

let _title = null;
let _text = null;

export default class NewPostForm extends Component {

  constructor(props){
    super(props)
    this.state = {
      stateChange: false
    }
  }

  handleNewPostFormSubmission = (e) => {
    e.preventDefault()
    const date = new Date().toString()
    console.log(typeof date);
    console.log('date:', date);
    console.log(moment('Wed Sep 11 2019 11:38:07 GMT-0700 (Pacific Daylight Time)').fromNow());
    const fromNowTime = moment('Wed Sep 11 2019 11:38:07 GMT-0700 (Pacific Daylight Time)').fromNow();
    this.props.callback({title: _title.value,
                         text: _text.value,
                         username: "Tim",
                         hours: 8,
                         upvotes: 0,
                         subreddit: "AskReddit",
                         icon: postIcon,
                         timestamp: new Date,
                       })
  console.log({title: _title.value,
                       text: _text.value,
                       username: "Tim",
                       hours: 8,
                       upvotes: 0,
                       subreddit: "AskReddit",
                       icon: postIcon,
                       timestamp: moment('Wed Sep 11 2019 11:38:07 GMT-0700 (Pacific Daylight Time)').fromNow(),
                     });
    this.setState({ stateChange: true })
  }

  render(){

    const stateChange = this.state.stateChange;
    if(stateChange === true) {
      return <Redirect to="/" />
    }

    return (
      <div className="newposts">
        <div className="new-post-form">
          <form onSubmit={this.handleNewPostFormSubmission}>
            <input
            type='text'
            id='title'
            placeholder='title'
            ref={(input) => {_title = input;}}/>
            <input
            type='text'
            id='text'
            placeholder='your post'
            ref={(input) => {_text = input;}}/>
            <div className="center">
            <button className="form-btn" type='submit'>Submit</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}
