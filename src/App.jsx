import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Men from './components/Products/Men'
import Women from './components/Products/Women'
import Kids from './components/Products/Kids'
import MensDetails from './components/ProductDetails/MensDetails'
import WomensDetails from './components/ProductDetails/WomensDetails'
import KidsDetails from './components/ProductDetails/KidsDetails'
import Cart from './components/Cart/Cart'
import Footer from './components/Footer/Footer'
import Thanks from './components/Thanks/Thanks'

function App() {

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/mens' element={<Men />} />
        <Route path='/womens' element={<Women />} />
        <Route path='/kids' element={<Kids />} />
        <Route path='/mens/:id' element={<MensDetails />} />
        <Route path='/womens/:id' element={<WomensDetails />} />
        <Route path='/kids/:id' element={<KidsDetails />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/success' element={<Thanks />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
