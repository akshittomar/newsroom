import './App.css';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";



const App = () => {

  const [mode, setmode] = useState('dark');
  const [country, setcountry] = useState("in");

  const countrySetter =  code => {
    switch (code) {
      case 100:
         (setcountry("in"));

        break;
      case 101:
        (setcountry("us"));

        break;
      case 102:
        (setcountry("ru"));

        break;
      case 103:
        setcountry("ca");

        break;
      case 104:
        setcountry("jp");

        break;
      case 105:
        setcountry("ae");

        break;
      case 106:
        setcountry("at");

        break;
      case 107:
        setcountry("bg");

        break;
      default:
            break;

    }
  }

  const toggel = () => {
    if (mode === 'dark') {
      setmode('light')
    }
    else {
      setmode('dark')
    }
  }


  let apikey = '5f4aeda8e422450ba3f1844cd947f12a';
  let pageSize = 9;


  return (<>

    <Router>

      <Navbar mode={mode} onClic={toggel} country={country} />



      <Routes>
        <Route exact path={`/${country}/business`} element={<News mode={mode} countrySetter={countrySetter} onClic={toggel} apikey={apikey} key={`/${country}/business`} pageSize={pageSize} country={country} category="business" />} />
        <Route exact path={`/${country}/entertainment`} element={<News mode={mode} countrySetter={countrySetter} onClic={toggel} apikey={apikey} key="entertainment" pageSize={pageSize} country={country} category="entertainment" />} />
        <Route exact path='/' element={<News mode={mode} countrySetter={countrySetter} onClic={toggel} apikey={apikey} key="general" pageSize={pageSize} country={country} category="general" />} />
        <Route exact path='*' element={<News mode={mode} countrySetter={countrySetter} onClic={toggel} apikey={apikey} key="unknown" pageSize={pageSize} country={country} category="general" />} />
        <Route exact path={`/${country}/general`} element={<News mode={mode} countrySetter={countrySetter} onClic={toggel} apikey={apikey} key="genera" pageSize={pageSize} country={country} category="general" />} />
        <Route exact path={`/${country}/health`} element={<News mode={mode} countrySetter={countrySetter} onClic={toggel} apikey={apikey} key="health" pageSize={pageSize} country={country} category="health" />} />
        <Route exact path={`/${country}/science`} element={<News mode={mode} countrySetter={countrySetter} onClic={toggel} apikey={apikey} key="science" pageSize={pageSize} country={country} category="science" />} />
        <Route exact path={`/${country}/sports`} element={<News mode={mode} countrySetter={countrySetter} onClic={toggel} apikey={apikey} key="sports" pageSize={pageSize} country={country} category="sports" />} />
        <Route exact path={`/${country}/technology`} element={<News mode={mode} countrySetter={countrySetter} onClic={toggel} apikey={apikey} key="technology" pageSize={pageSize} country={country} category="technology" />} />
        <Route exact path="/india" element={<News mode={mode} countrySetter={countrySetter} onClic={toggel} apikey={apikey} key="india" pageSize={pageSize} country={country} category="general" />} />
        <Route exact path="/america" element={<News mode={mode} countrySetter={countrySetter} onClic={toggel} apikey={apikey} key="america" pageSize={pageSize} country={country} category="general" />} />
        <Route exact path="/russia" element={<News mode={mode} countrySetter={countrySetter} onClic={toggel} apikey={apikey} key="russia" pageSize={pageSize} country="ru" category="general" />} />
        <Route exact path="/japan" element={<News mode={mode} countrySetter={countrySetter} onClic={toggel} apikey={apikey} key="japan" pageSize={pageSize} country="jp" category="general" />} />
        <Route exact path="/canada" element={<News mode={mode} countrySetter={countrySetter} onClic={toggel} apikey={apikey} key="canada" pageSize={pageSize} country="ca" category="general" />} />
        <Route exact path="/emirates" element={<News mode={mode} countrySetter={countrySetter} onClic={toggel} apikey={apikey} key="uae" pageSize={pageSize} country="ae" category="general" />} />
        <Route exact path="/australia" element={<News mode={mode} countrySetter={countrySetter} onClic={toggel} apikey={apikey} key="aus" pageSize={pageSize} country="at" category="general" />} />
        <Route exact path="/bulgaria" element={<News mode={mode} countrySetter={countrySetter} onClic={toggel} apikey={apikey} key="bg" pageSize={pageSize} country="bg" category="general" />} />

      </Routes>
    </Router>
  </>
  )

}
export default App
