import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from "./containers/Header";
import ProductListing from "./containers/ProductListing";
import ProductComponent from "./containers/ProductComponent";
import ProductDetails from "./containers/ProductDetails";


function App() {
  return (
    <div className="App">
          
          <Router>
              <br/>
          <Header/>
              <Switch>
              
              <Route path="/" exact component={ProductListing}/>
              
              <Route path="/product/:productId" exact component={ProductDetails}/>
                  
              
              <Route>404 Not Found</Route>
              
              </Switch>
          </Router>
    
    </div>
  );
}

export default App;
