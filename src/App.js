// import _ from 'lodash';
// import React,{Component} from 'react';
// import ReactDOM from 'react-dom';
// import YTSearch from 'youtube-api-search';

// import SearchBar from './Components/Search_Bar';
// import VideoList from './Components/Video_list';
// import VideoDetail from './Components/Video_detail';

// const API_Key = 'AIzaSyDfNsCmysZITos8NE9FBi7O9WobiFesj9c';



// class App extends Component {
//   constructor(props) {
//     super(props);

//     this.state={videos:[],selectedVideo:null};

//     this.videoSearch('Kun faya kun');
//   }

//   videoSearch(term){
//     YTSearch({key:API_Key,term:term}, (videos) => {
//       this.setState({videos:videos,selectedVideo:videos[0]});
//     });
//   }

//   render(){
//       const videoSearch= _.debounce((term) => {this.videoSearch(term)},300);

//       return (
//        <div>
//         <SearchBar onSearchTermChange = {videoSearch} />
//         <VideoDetail video={this.state.selectedVideo} />
//         <VideoList
//          OnVideoSelect= {selectedVideo=>this.setState({selectedVideo})}
//          videos={this.state.videos} />
//        </div>
//      );
//     }
//   }

// export default App;
