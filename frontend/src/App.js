import NavigationAdvanced from "./components/NavigationAdvanced";
import './App.scss';
import Home from './pages/Home';
import AuthProvider from "./provider/AuthProvider";
import Routes from "./components/Routes";
import {Route, BrowserRouter as Router} from "react-router-dom";

import {Breadcrumbs} from "react-breadcrumbs-dynamic";



function App(props) {
  return (

    <div id="App" className="App">
      <header className="App-header">
          <AuthProvider>
              {/*<span className="mx-5">*/}
              {/*      <Breadcrumbs*/}
              {/*          separator={<b> > </b>}*/}
              {/*          finalItem={'b'}*/}
              {/*      />*/}
              {/*    {props.children}*/}
              {/*  </span>*/}
              <Routes>
              </Routes>
          </AuthProvider>
      </header>
    </div>
  );
}

export default App;
