
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Tourism from "./web landing page/Tourism";
import  Home  from "./web landing page/Home";
import Technology from "./web landing page/Technology";
import Movie from "./web landing page/Movie";
import Food from "./web landing page/Food";
import Navbar from "./web landing page/Navbar"
import Slide from "./web landing page/Slide";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Footer from "./web landing page/footer";


function App() {
  return (
    <div className="App" >
<BrowserRouter>
<Navbar/>
<Slide/>
<h1>Products and services</h1>
<Routes>
<Route path="/Home" element={<Home/>}></Route>
  <Route path="/Tourism" element={<Tourism/>}></Route>
<Route path="/Technology" element={<Technology/>}></Route>
<Route path="/Movie" element={<Movie/>}></Route>
<Route path="/Food" element={<Food/>}></Route>
</Routes>
</BrowserRouter>
      {/* <h1>hello</h1>   */}
       {/* <Contact/>   */}
       {/* <About/>   */}
       {/* <Home/>  */}
<Footer/>
   </div>
  );
}

export default App;








