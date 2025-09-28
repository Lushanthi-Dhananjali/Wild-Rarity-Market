
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import HomeCategary from './Pages/HomeCategary';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Home from './Pages/Home';
import Footer from './Components/Footer/Footer';
import birds_banner from './Components/Assest/brids_banner.png'
import animal_banner from './Components/Assest/animal_banner.png'
import marketitem_banner from './Components/Assest/market_banner.png'
import RareAnimals from './Pages/RareAnimals';
import RareBirds from './Pages/RareBirds';






function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/birds' element={<HomeCategary banner={birds_banner} category='bird'/>}/>
        <Route path='/birds' element={<RareBirds/>} category='bird'/>
        <Route path='/animal' element={<HomeCategary banner={animal_banner} category='animal'/>}/>
        <Route path='/animal' element={<RareAnimals/>} category='animal'/>
        <Route path='/marketitems' element={<HomeCategary banner={marketitem_banner} category='marketitem'/>}/>
        <Route path='/about' element={<HomeCategary  category='about'/>}/>
        <Route path="product" element={<Product/>}>
        <Route path=':productID' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
        
       
      </Routes>
      <Footer/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
