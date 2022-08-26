import React from 'react'
import Navbar from './Components/Navbar'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Components/Home'
import Contact from './Components/Contact'
import About from './Components/about'

const App = () => {

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

export default App;