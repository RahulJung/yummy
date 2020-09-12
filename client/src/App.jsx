import React from 'react';
import axios from 'axios';
// const env = require('../../.env')
import Resturants from './components/Resturants.jsx'
import  PlaceSearch from'./components/PlaceSearch.jsx'
import './styles/styles.css';
import Maps from './components/Maps.jsx';
import CustomizedDialogs from './components/D.jsx'


class App extends React.Component {
  constructor(){
    super()
    this.state = {
      data: [],
      lat: null,
      lng: null,
      cName: '',
      reviews: [],
      id: '',
      review: '',
      rating:0,
    }
    this.getData = this.getData.bind(this);
    this.getReview = this.getReview.bind(this);
    this.changeHandler = this.changeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
    this.onStarClick = this.onStarClick.bind(this);
    this.updateId = this.updateId.bind(this);
  }

  componentDidMount(){
    this.getData();
    this.getReview();
  }

  updateId(id) {
    this.setState({
      id : id,
    })
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
      console.log('from axios get request: ', res.data);
      this.setState({
        reviews: res.data
      });
    })
    .catch((err) => {
      console.log('Error getitng the data', err)
    })
  }

  onStarClick(nextValue) {
    this.setState({ rating: nextValue });
  }

  changeHandler(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  submitHandler(e) {
    e.preventDefault();
    axios.post("/add", {
      cName: this.state.cName,
      review: this.state.review,
      rating: this.state.rating,
      id: this.state.id,
    })
      .then(() => this.getReview(this.state.id))
    // Clear the form once the form is submitted
      // eslint-disable-next-line no-unused-vars
      .then(() => {
        this.setState({
          cName:'',
          review: '',
          rating: 0,
          id: this.state.id,
        });
      })
      .catch((err) => {
        console.log('Error posting reviews in Client', err);
      });
  }

  render() {
    // console.log("This is the api", process.env.REACT_APP_API_KEY);
    console.log('This is the state data', this.state.data)
    return (
      <div>
        <Maps
        review={this.state.review}
        rating={this.state.rating}
        getData={this.getData}
        data={this.state.data}
        getReview={this.getReview}
        onStarClick={this.onStarClick}
        changeHandler={this.changeHandler}
        submitHandler={this.submitHandler}
        updateId={this.updateId}
        reviews={this.state.reviews}
        cName={this.state.cName}
        >
        </Maps>
        {/* <Resturants data={this.state.data}/> */}
        <CustomizedDialogs/>

      </div>
    )
  }
}

export default App;
