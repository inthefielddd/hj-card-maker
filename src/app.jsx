import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './components/login/login';
import Maker from './components/maker/maker';
import styles from './app.module.css';

function App() {
    return (
        <div className={styles.app}>
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
        </div>
    );
}

export default App;
