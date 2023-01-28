import _ from 'lodash';
import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import './style/style.css'
import SearchBar from './Components/Search_Bar';
import VideoList from './Components/Video_list';
import VideoDetail from './Components/Video_detail';


const API_Key = 'AIzaSyBf5wfPtC-xoUfIB9kYAfhc-_noDcgrm2Q';



class App extends Component {
  constructor(props) {
    super(props);

    this.state={videos:[],selectedVideo:null};

    this.videoSearch('Kun faya kun');
  }

  videoSearch(term){
    YTSearch({key:API_Key,term:term}, (videos) => {
      this.setState({videos:videos,selectedVideo:videos[0]});
    });
  }

  render(){
      const videoSearch= _.debounce((term) => {this.videoSearch(term)},300);

      return (
       <div>
        <SearchBar onSearchTermChange = {videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
         OnVideoSelect= {selectedVideo=>this.setState({selectedVideo})}
         videos={this.state.videos} />
       </div>
     );
    }
  }
//}


ReactDOM.render(<App />, document.querySelector('#root'));
