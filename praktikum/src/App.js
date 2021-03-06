import React from "react"
import Navbar from './components/Navbar'
import {Switch, Route} from "react-router-dom"

// import semua halaman yang ditampilkan
import Home from "./pages/Home"
import About from './pages/About'
import Gallery from "./pages/Gallery"
import LingkunganHidup from "./pages/lingkunganhidup"
import Keranjang from "./pages/keranjang"
import Cart from "./pages/Cart"
import { renderIntoDocument } from "react-dom/test-utils"

class App extends React.Component{
  render(){
    return(
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/lingkunganhidup" component={LingkunganHidup} />
          <Route path="/keranjang" component={Keranjang} />
          <Route path="/cart" component={Cart} />
        </Switch>

      </div>
    )
  }
}

export default App;