import './App.css';
import Login from './pages/Login';
import Registro from './pages/Registro';
import Home from './pages/Home';
import About from './pages/About';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';

function App() {
    return ( < >
        <
        Router >
        <
        Switch >
        <
        Route path = "/Home" > < Home / > < /Route> <
        Route path = "/login" > < Login / > < /Route> <
        Route path = "/Registro" > < Registro / > < /Route> <
        Route path = "/About" > < About / > < /Route> <
        /Switch> <
        /Router> <
        />
    );
}

//Al guardar este archivo en específico, se autoformatea y arruina 
//la tabulación, no entiendo por qué

export default App;