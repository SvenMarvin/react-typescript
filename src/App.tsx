import React, { useContext, useState } from "react";
import "./App.scss";
//Components
import Layout from "./container/ui/layout/Layout";
//Import Global State
import { LoginContext } from "./store/login/LoginContextContainer";
import Snow from "./container/ui/Snow/Snow";
import "./container/ui/Snow/snow.scss";

const App: React.FC = () => {
  let { isAuth } = useContext(LoginContext);
  let [isSnowing, setIsSnowing] = useState(false);
  let [isStopSnowing, setIsStopSnowing] = useState(false);

  let helloText = <h1>Hello,</h1>;
  if (isAuth[0]) {
    helloText = <h1>Hello {isAuth[1]},</h1>;
  }

  let snowing = new Snow();
  let letItSnow = () => {
    snowing.snow();
    setIsStopSnowing(false);
    setIsSnowing(true);
  };
  let stopSnowing = () => {
    snowing.stopSnow();
    setIsSnowing(false);
    setIsStopSnowing(true);
  };
  let removeSnow = () => {
    snowing.removeSnow();
    setIsStopSnowing(false);
  };

  return (
    <div className="App">
      <Layout isImage={true} color={null}>
        <div id="home_content">
          {helloText}
          <p>
            Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus
            Bonorum et Malorum" <br />
            (The Extremes of Good and Evil) by Cicero, written in 45 BC. <br />
            This book is a treatise on the theory of ethics, <br />
            very popular during the Renaissance. <br />
            The first line of Lorem Ipsum, <br />
            "Lorem ipsum dolor sit amet..", <br />
            comes from a line in section 1.10.32.
          </p>
        </div>
        <div className="snowButton">
          {isSnowing ? (
            <button onClick={stopSnowing}>Stop Snowing</button>
          ) : (
            <button onClick={letItSnow}>Let it Snow</button>
          )}
          {isStopSnowing ? (
            <button style={{ marginLeft: "20px" }} onClick={removeSnow}>
              Remove Snow
            </button>
          ) : null}
        </div>
      </Layout>
    </div>
  );
};

export default App;
