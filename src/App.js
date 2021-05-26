import React from "react";
import './App.css';
import {BrowserRouter} from "react-router-dom";
import {useTranslation} from 'react-i18next';
import Header from "./Components/Header/Header";
import MainContent from "./Components/MainContent/MainContent";
import Footer from "./Components/Footer/Footer";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import {useEffect} from "react";
// import Header2 from "./Components/Header/Header2/Header2";

function App() {

    const {t, i18n} = useTranslation();

    function handleClick(lang) {
        i18n.changeLanguage(lang);

    }


  return (
      <BrowserRouter>
          <div className='page-wrapper'>
              <ToastContainer/>

              {/*<nav style={{padding: 20}}>*/}
              {/*    <button onClick={() => handleClick('kyr')}>Kyrgyz</button>*/}
              {/*    <button onClick={() => handleClick('ru')}>Russian</button>*/}
              {/*    <button onClick={() => handleClick('tr')}>Turkish</button>*/}
              {/*</nav>*/}
              <Header/>
              {/*<Header2/>*/}
              <MainContent/>
              <Footer/>

          </div>
      </BrowserRouter>

  );
}

export default App;
