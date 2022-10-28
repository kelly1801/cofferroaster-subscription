import HomePage from "./pages/HomePage";
import { BrowserRouter,Routes, Route} from "react-router-dom";
import NavBar from "./components/NavBar";
import footer from "./components/Footer";
import Footer from "./components/Footer";
function App() {
  return (
    <div>
        <NavBar/>
        <BrowserRouter>
            <Routes>
                <Route path='/MIMI' element={<HomePage/>}/>
            </Routes>


        </BrowserRouter>
<Footer/>
    </div>
  );
}

export default App;
