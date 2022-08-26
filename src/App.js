import React from 'react'
// import SearchInput from './SearchInput'
// import {entry} from './SearchInput'
// import axios from 'axios'
// import ImageList from'./ImageList'
import Navbar from './Components/Navbar'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Components/Home'
import Contact from './Components/Contact'
import About from './Components/about'

class App extends React.Component{

//   constructor(props){
//     super(props)
//     this.state = {
//       images :[]
//     }
//     this.onSearchSubmit = this.onSearchSubmit.bind(this);
//   }

// async onSearchSubmit(entry){
//  const response = await axios.get('https://pixabay.com/api/?key=29259905-807c056e1f69a3b28cb235ae0&q=${entry}&image_type=photo&pretty=true')
//  this.setState({images:response.data.hits})
// }

  render(){
    return (
      <div>
        <BrowserRouter>
        <Navbar />
        <Routes>
        <Route path='/Home' element={<Home />}></Route>
        <Route path='/About' element={<About />}></Route>
        <Route path='/Contact' element={<Contact />}></Route>
        </Routes>
        </BrowserRouter>
      {/* <div className='ui container' style={{ marginTop: '30px' }}>
        <SearchInput onSearchSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div> */}
      </div>
      )
  }
  
}

export default App;