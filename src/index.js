import _ from 'lodash';
import React, {Component} from 'react';   //manage components
import ReactDOM from 'react-dom'; //render the code
import SearchBar from './components/search_bar'; //declare the path
import YTSearch from 'youtube-api-search'; //this is the package installed from youtube
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyAoNbenBSktbkdmzX1vDg93rq8d3kZfqaQ';
//youtube API key



class App extends Component {

  constructor(props){
   super(props);

  this.state = {
    videos: [],
    selectedVideo: null
  };
    this.videoSearch('fashion') 
  }
  videoSearch(term){
  YTSearch({key: API_KEY, term: term}, (videos) => {
  this.setState({ videos:videos, selectedVideo: videos[0]
  }); //if you use same keyword and value you can just do ({videos})
 });
}
  render(){
    const videoSearch = _.debounce((term)=> {this.videoSearch(term)},300);
  return (
 ////selectedVideo is declared as a new object 
  <div>
   <h2 className="title">styleSigna</h2>
   <p>Search</p> <SearchBar onSearchTermChange={videoSearch} />
   <VideoDetail video={this.state.selectedVideo}/>
   < VideoList onVideoSelect={selectedVideo => this.setState({selectedVideo})} videos={this.state.videos}/> 
  </div> 
  );
}
}

ReactDOM.render(<App />, document.querySelector('.container'));