<<<<<<< HEAD
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
=======
import React, { useContext } from "react";
import "./App.scss";
//Components
import Layout from "./container/ui/layout/Layout";
//Import Global State
import { LoginContext } from "./store/login/LoginContextContainer";

const App: React.FC = () => {
  let {isAuth} = useContext(LoginContext);

  let helloText = <h1>Hello,</h1>;
  if (isAuth[0]) {
    helloText = <h1>Hello {isAuth[1]},</h1>;
  }

  return (
    <div className="App">
      <Layout isImage={true} color={null}>
        <div id="home_content">
          {helloText}
          <p>
          Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" <br/>
           (The Extremes of Good and Evil) by Cicero, written in 45 BC. <br/>
          This book is a treatise on the theory of ethics, <br/>
          very popular during the Renaissance. <br/>
          The first line of Lorem Ipsum, <br/>
          "Lorem ipsum dolor sit amet..", <br/> 
          comes from a line in section 1.10.32.
          </p>
        </div>
      </Layout>
    </div>
>>>>>>> release/0.0.2
  );
};

export default App;
