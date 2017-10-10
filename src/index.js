import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import YTSearch from "youtube-api-search";

const API_KEY = 'AIzaSyBbzrBTewQDY8LkkLKkyqrGPM6ci0kRunU';
const videos = YTSearch({key: API_KEY, term: 'yoyo'}, (videos) => {
  console.log(videos);
});

const App = () => {
  return (
    <div>
      <SearchBar />
      <VideoList />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
