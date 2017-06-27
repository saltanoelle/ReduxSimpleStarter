import React, {Component} from 'react';   //manage components
import ReactDOM from 'react-dom'; //render the code
import SearchBar from './components/search_bar'; //declare the path
import YTSearch from 'youtube-api-search'; //this is the package installed from youtube
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyAoNbenBSktbkdmzX1vDg93rq8d3kZfqaQ';
//youtube API



class App extends Component {

  constructor(props){
   super(props);

  this.state = {
    videos: [],
    selectedVideo: null
  };

  YTSearch({key: API_KEY, term: 'fashion'}, (videos) => {
  this.setState({
  videos:videos,
  selectedVideo: videos[0]
  }); //if you use same keyword and value you can just do ({videos})
 });
}
  render(){
  return (
 
  <div>
   <h2 className="title">styleSigna</h2>
   <p className="search_bar">Search</p> <SearchBar />
   <VideoDetail video={this.state.selectedVideo}/>
   < VideoList videos={this.state.videos }/>
  </div>
  );
}
}

ReactDOM.render(<App />, document.querySelector('.container'));