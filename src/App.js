import React, { Component } from "react";
import "./App.css";
import Home from "./components/nav/nav";
import Post from "./components/post/post";
import Footer from './components/footer/footer'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Company from './components/company/company'
import News from './components/news/news'
import Contacts from './components/contacts/contacts'
import UserDetail from "./components/userdetail/userdetail";



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    // this.dataFetch();
  }


  render() {
    return (
      <div>
        <Home />
     
        <Router>
          <div>
            <Route path="/userdetail/"  component={UserDetail} />
            <Route path="/company/" component={Company} />
            <Route path="/news/" component={News} />
            <Route path="/contacts/" component={Contacts} />
            <Route path="/posts/" component={Post} />
            <Footer />
          </div>
        </Router>

      </div>
    );
  }
}

export default App;

