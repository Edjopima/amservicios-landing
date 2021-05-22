import React, {useState, useEffect} from 'react';
import {
  Switch,
  Route
} from "react-router-dom";
import Header from './components/Header/Header'
import Home from './containers/Home/Home'
import About from './containers/About/About'
import Contact from './containers/Contact/Contact'
import Footer from './components/Footer/Footer';
import DocumentsPage from './containers/DocumentsPage/DocumentsPage';

const App = () => {
  const [images,setImages]=useState([]);

  useEffect(() => async () => {
    console.log('useEffect');
    const response = await fetch('https://rickandmortyapi.com/api/character/?page=19');
    const data = await response.json();
    const imageList = data.results.map((item)=>{
      const image = {
        original:item.image,
        thumbnail:item.image,
      }
      return image;
    });
    console.log(imageList);
    setImages(imageList);
  },[])
  return (
    <>
        <Header />
          <Switch >
            <Route
              path="/contact"
              component={Contact}
            />
            <Route path="/about">
              <About images={images} />
            </Route>
            <Route path="/documents">
              <DocumentsPage />
            </Route>
            <Route
              path="/"
              component={Home}
            />
          </Switch>
        <Footer/>
    </>
  );
}

export default App;
