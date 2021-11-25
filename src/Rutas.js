import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Noticias from './components/Noticias';
import Cuenta from './components/Cuenta';
import Menu from './components/Menu';
import Mundo from './components/Mundo';



class Rutas extends Component{


    render(){
        return(
            <BrowserRouter>
            
                <Switch>
                    <Route exact path="/" component = {Noticias} />
                    <Route exact path="/noticias" component = {Noticias} />
                    <Route exact path="/cuenta" component = {Cuenta} />
                    <Route exact path="/mundiales" component = {Mundo} />
                    

                </Switch>
                <Menu></Menu>
                
            
            </BrowserRouter>
        );
    }


}

export default Rutas;