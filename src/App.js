import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './components/login/login';
import Maker from './components/maker/maker';

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact>
                    <Login />
                </Route>
                <Route path="/maker" exact>
                    <Maker />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
