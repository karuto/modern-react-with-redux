import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import YTSearch from "youtube-api-search";

const API_KEY = 'AIzaSyBbzrBTewQDY8LkkLKkyqrGPM6ci0kRunU';
const videos = YTSearch({key: API_KEY, term: 'yoyo'}, (videos) => {
  return videos;
});

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: []
    };

    YTSearch({key: API_KEY, term: 'yoyo'}, (videos) => {
      this.setState({
        videos: videos
      });
    });

  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
