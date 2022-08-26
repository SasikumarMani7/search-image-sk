import React from 'react'
import SearchInput from '../SearchInput'
import {entry} from '../SearchInput'
import axios from 'axios'
import ImageList from'../ImageList'

class Home extends React.Component{

    constructor(props){
      super(props)
      this.state = {
        images :[]
      }
      this.onSearchSubmit = this.onSearchSubmit.bind(this);
    }
  
  async onSearchSubmit(entry){
   const response = await axios.get('https://pixabay.com/api/?key=29259905-807c056e1f69a3b28cb235ae0&q=${entry}&image_type=photo&pretty=true')
   this.setState({images:response.data.hits})
  }

render(){
    return (
        <div className='ui raised very padded text container segment' 
            style={{marginTop:'80px'}}>
            <h1>Home</h1>
                {/* <p>
                Pexels provides high quality and completely free stock photos licensed under the Pexels license.

                All photos are nicely tagged, searchable and also easy to discover through our discover pages.
                </p> */}
                <div className='ui container' style={{ marginTop: '30px' }}>
        <SearchInput onSearchSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
        </div>
    )
}
}

export default Home;
