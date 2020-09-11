import React from 'react';
import axios from 'axios';
import Resturants from './components/Resturants.jsx'
import  PlaceSearch from'./components/PlaceSearch.jsx'
import './styles/styles.css';
import Maps from './components/Maps.jsx';



class App extends React.Component {
  constructor(){
    super()
    this.state = {
      data: [],
      lat: null,
      lng: null,
      reviews: [],
      id: 0,
    }
    this.getData = this.getData.bind(this);
    this.getReview = this.getReview.bind(this);
  }

  componentDidMount(){
    this.getData();
    this.getReview();
  }

  getData(latitude = this.state.lat, longitude = this.state.lng){
    axios.get(`/foo`, {
      params: {
        lat : latitude,
        lng : longitude
      }
    })
    .then((res) => {
      this.setState({
        data: res.data,
      });
    })
    .catch((err) => {
      console.log('Error getitng data from the server', err);
    });
  }

  getReview(id = this.state.id) {
    axios.get(`/reviews/${id}`)
    .then((res) => {
      console.log('from axios get request: ', res);
      this.setState({
        reviews: res.data
      });
    })
    .catch((err) => {
      console.log('Error getitng the data', err)
    })
  }

  render() {
    console.log('This is the state', this.state.data)
    return (
      <div>
        <Maps getData={this.getData} data={this.state.data} getReview={this.getReview}></Maps>
        {/* <Resturants data={this.state.data}/> */}
      </div>
    )
  }
}

export default App;
