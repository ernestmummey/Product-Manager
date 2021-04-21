import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Router} from '@reach/router'
import Views from './components/Dashboard'
import Item from './components/OneProduct'
import EditProducts from './components/EditProducts'




function App() {
  return (
    <div className="App">
        <Router>
          <Views path = '/'/>
          <Item path = "/api/product/:id" />
          <EditProducts path = '/api/product/:update/:id' />
        </Router>
    </div>
  );
}

export default App;
