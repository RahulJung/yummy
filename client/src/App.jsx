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
    }
    this.getData = this.getData.bind(this);
  }

  componentDidMount(){
    this.getData();
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

  render() {
    console.log('This is the state', this.state.data)
    return (
      <div>
        <Maps getData={this.getData} data={this.state.data}></Maps>
        {/* <Resturants data={this.state.data}/> */}
      </div>
    )
  }
}

export default App;
