import './App.css';
import GetDate from './components/Date';
import Form from './components/Form';
import MyTask from './components/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom/cjs/react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <GetDate/>
        <Form/>
        <div className="Content">
          <Switch>
            <Route exact path="/">
              <MyTask/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
