import React, {useState, useContext} from 'react';
import './App.css';
//Components
import Layout from './container/ui/layout/Layout';
import Nav from './components/nav/Nav';


const App: React.FC =() => {



  return (
      <div className="App">
        <Layout isImage={true}>
          <Nav/>
        </Layout>
      </div>
  );
}

export default App;
