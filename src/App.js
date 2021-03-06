import React, {useEffect, useState} from "react";
import './App.css';
import {BrowserRouter} from "react-router-dom";
import {useTranslation} from 'react-i18next';
// import Header from "./Components/Header/Header";
import MainContent from "./Components/MainContent/MainContent";
import Footer from "./Components/Footer/Footer";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {FullPageLoader} from "./Loader/FullPageLoader";
import {useSelector} from "react-redux";
import MobileHeader from "./Components/Header/MobileHeader/MobileHeader";
import Headers from "./Components/Header/Header2/Headers";
import {mobile_menu} from "./service/accessFunctions";


function App() {

    const {t, i18n} = useTranslation();
    const load = useSelector(state => state.load.load)
    function handleClick(lang) {
        i18n.changeLanguage(lang);

    }

    useEffect(() => {
    }, [])


  return (
      <BrowserRouter>
          <div className='page-wrapper'>
              <ToastContainer/>

              {/*<nav style={{padding: 20}}>*/}
              {/*    <button onClick={() => handleClick('kyr')}>Kyrgyz</button>*/}
              {/*    <button onClick={() => handleClick('ru')}>Russian</button>*/}
              {/*    <button onClick={() => handleClick('tr')}>Turkish</button>*/}
              {/*</nav>*/}
              <Headers/>
              {/*<Header2/>*/}
              <MainContent/>
              {/*<Whatsapps/>*/}
              <Footer/>

              {load ? <FullPageLoader/> : null}

          </div>
          <MobileHeader/>
      </BrowserRouter>

  );
}

export default App;
