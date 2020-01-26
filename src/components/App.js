import React from 'react';
import './App.css';
import Movie from './Movie';
import Artist from './Artist';
import axios from 'axios';
import Firebase from './Firebase';


/** 
 * React Component LifeCycle (Deprecated 된 것들이 많으므로 실제 사용시 확인 필요)
 * 
 * @see https://ko.reactjs.org/docs/react-component.html
 * 
 * Mount
 * 
 *    constructor(): Component가 생성되었을때 호출
 *    -> static getDerivedStateFromProps()
 *    -> render(): view를 만들어주는 함수; 구현돼야하는 유일한 메서드
 *    -> componentDidMount(): Component가 마운트된 직후, 즉 트리에 삽입된 직후에 호출
 * 
 * Update
 * 
 *    static getDerivedStateFromProps()
 *    -> shouldComponentUpdate()
 *    -> render()
 *    -> getSnapshotBeforeUpdate()
 *    -> componentDidUpdate(): Component가 업데이트 된 후 호출되며 preProps와 preState 조회가 가능
 * 
 * Unmount
 * 
 *    componentWillUnmount(): Component가 Destroy된 후 호출된다.
 */

const MOVIE_LIST = "https://yts-proxy.now.sh/list_movies.json?sort_by=rating";

class App extends React.Component {

  // state는 React Component 안의 object
  // state가 바뀔 때 마다, Update 가 발생한다.
  state = {
  }
  
  constructor(props) {
    super(props);
    this.fire = new Firebase();
    this.storageRef = this.fire.getFireStoreageRef();
    this.db = this.fire.getFireStore();
  }

  _getMovies = async () => {
    // await 키워드는 async 함수 내에서만 사용될 수 있으며 동기적으로 프로미스를 기다릴 수 있도록 해준다.
    // 만약 async 밖에서 프로미스를 사용하면 여전히 then 콜백을 사용해야 한다.
    const {
      data: {
        data: { movies }
      }
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    );
    // setState()를 이용해야 lifeCycle 함수들이 호출, render()가 호출된다.
    this.setState({
      movies
    })
  }

  _getArtist = async (id) => {
    const docRef = this.db.collection("Artist").doc(id)
    const artist = await docRef.get().then(function(doc) {
      if (doc.exists) {
        return doc.data();
      } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
      }
    }).catch(function(error) {
        console.log("Error getting document:", error);
    });

    const photo = await this.storageRef.child(`/Artist/${id}.JPG`).getDownloadURL();
    artist.photo = photo
    this.setState({
      artist
    })
    
  }

  _getPoster = async (id) => {
    const poster_url = await this.storageRef.child(`/${id}/0001.jpg`).getDownloadURL();
    this.setState({
      poster_url
    })
  }

  componentDidMount() {
    this._getMovies();
    this._getPoster("1");
    this._getArtist("1");
  }

  _renderArtist = () => {
    const artist = this.state.artist;
    return < Artist 
      name={artist.name}
      email={artist.email}
      phone={artist.phone}
      description={artist.description}
      photo={artist.photo}
    />
  }

  _renderMovies = () => {
    const movies = this.state.movies.map( movie => {
      // 엘리먼트가 많은 경우 key를 넣어 줘야 함
      return < Movie 
        key={movie.id}
        title={movie.title_english}
        poster={this.state.poster_url}
        genres={movie.genres}
        synopsis={movie.synopsis}
        />
    })
    return movies
  }

  render() {
    const { movies } = this.state;
    const { artist } = this.state;
    const { poster_url } = this.state;

    return (
      <div>
        <div className={poster_url ? "App" : "App--loading"}>
          {artist ? this._renderArtist() : "..."}
        </div>
        <div className={poster_url ? "App" : "App--loading"}>
          {movies ? this._renderMovies() : "Loading..."}
        </div>
      </div>
    );
  }
}

export default App;
