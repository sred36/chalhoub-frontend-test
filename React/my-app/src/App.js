import './App.css';
import './css/Global.css';
import Product from './Layout/Product';
import Men from './Layout/Men';
import Women from './Layout/Women';
import Kids from './Layout/Kids';
import Accessories from './Layout/Accessories';
import Ftw from './Layout/Ftw';
import { Switch,Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
       <Switch>
          <Route path="/" component={Product} exact/>
          <Route path="/Men" component={Men} />
          <Route path="/WOMEN" component={Women} />
          <Route path="/KIDS" component={Kids} />
          <Route path="/FTW" component={Ftw} />
          <Route path="/ACCESSORIES" component={Accessories} />
          
      </Switch>
    </div>
  );
}

export default App;
