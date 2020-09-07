import React from "react";
import './styles/App.css';
import Navbar from './components/Navbar';
import Contact from "./components/contacts/Contact";
import {Provider} from "react-redux";
import store from "./store";
import {BrowserRouter as Router,Route,Switch,Redirect} from 'react-router-dom';
import AddContact from "./components/AddContact";
import EditContact from "./components/EditContact";


const App=()=>{
  return(

    <>
    <Provider store={store}>
      <Router>
       <Navbar/>
  <div className="container mt-5">
    <div className="row">
    <div className=" col-lg-12 col-md-12 col-10 mr-2 p-0 my-5">
   <Switch>
     <Route exact path="/" component={Contact}/>
     <Route exact path="/addContact" component={AddContact}/>
     <Route exact path="/editContact/:id" component={EditContact}/>
     <Redirect to="/"/>
     
  </Switch>
    </div>
  </div>
  </div>
  </Router>
  </Provider>

</>
  )
}
export default App;