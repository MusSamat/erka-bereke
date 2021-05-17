
import './App.css';
import {BrowserRouter} from "react-router-dom";
import Header from "./Components/Header/Header";
import MainContent from "./Components/MainContent/MainContent";
import Footer from "./Components/Footer/Footer";
import Header2 from "./Components/Header/Header2/Header2";

function App() {
  return (
      <BrowserRouter>
          <div className='page-wrapper'>
              <Header/>
              {/*<Header2/>*/}
              <MainContent/>
              <Footer/>
          </div>
      </BrowserRouter>

  );
}

export default App;
