import React, {useEffect, useState} from 'react';
import {
  Switch,
  Route
} from "react-router-dom";
import {Dropbox} from 'dropbox'

//IMPORT COMPONENTS
import Header from './components/Header/Header'
import Home from './containers/Home/Home'
import About from './containers/About/About'
import Contact from './containers/Contact/Contact'
import Footer from './components/Footer/Footer';
import DocumentsPage from './containers/DocumentsPage/DocumentsPage';

const App = () => {
  const [documents, setDocuments] = useState([])

  useEffect(() =>{
    const ACCESS_TOKEN = process.env.REACT_APP_DROPBOX_ACCESS_TOKEN;
    const dbx=new Dropbox({accessToken: ACCESS_TOKEN})
    const filterDocuments = (documents) =>{
      const filteredDocuments = [];
      for (let i = 0; i < documents.length ; i++) {
        const element = {
          title: documents[i].name,
          path: documents[i].path_display,
        }
        filteredDocuments.push(element);
      }
      return filteredDocuments;
    }

    dbx.filesListFolder({path: '/Solvencias'})
    .then(response=>setDocuments(filterDocuments(response.result.entries)))
    .catch(err=>console.log(err))
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
              <About />
            </Route>
            <Route path="/documents">
              <DocumentsPage documents={documents}/>
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
