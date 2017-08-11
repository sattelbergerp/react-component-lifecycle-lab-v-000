import React from 'react';
import Tweet from './Tweet';

class TweetWall extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tweets: []
    };
  }

  componentWillMount(){
    this.setState({tweets: this.props.newTweets})
  }
  shouldComponentUpdate(newProps){
    return newProps.newTweets.length > 0
  }
  componentWillReceiveProps(props){
    this.setState({tweets: [...props.newTweets, ...this.state.tweets]})
  }

  render() {
    const tweets = this.state.tweets.map((tweet, index) => <Tweet text={tweet.text} key={index} />);

    return (
      <div>{tweets}</div>
    );
  }
}

export default TweetWall;
