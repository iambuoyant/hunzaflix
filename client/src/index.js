import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import Routes from "./routes";
import { BrowserRouter } from "react-router-dom";
import { firebase } from "./firebase";
import App from "./App";
import { Provider } from "react-redux";
import configureStore from "./configureStore";

const store = configureStore();

// const App = (props, loggedInUser) => {
//   return (
//     <Provider store={store}>
//       <BrowserRouter>
//         <Routes {...props} {...loggedInUser} />
//       </BrowserRouter>
//     </Provider>
//   );
// };

firebase.auth().onAuthStateChanged(user => {
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <App auth={user} />
      </BrowserRouter>
    </Provider>,
    document.getElementById("root")
  );
});
