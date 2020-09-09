import React from 'react';
import  PlaceSearch from'./components/PlaceSearch.jsx'
import './styles/styles.css';
import Maps from './components/Maps.jsx';



class App extends React.Component {
  constructor(){
    super()
    this.state
    ={}
  }

  render() {
    return (
      <div>
        {/* <PlaceSearch></PlaceSearch> */}
        <Maps></Maps>
      </div>
    )
  }
}

export default App;
