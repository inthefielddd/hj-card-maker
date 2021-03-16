import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './components/login/login';
import Maker from './components/maker/maker';
import styles from './app.module.css';

function App({ authService, FileInput}) {
    return (
        <div className={styles.app}>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/">
                        <Login authService={authService} />
                    </Route>
                    <Route exact path="/maker">
                        <Maker authService={authService} FileInput={FileInput}/>
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
