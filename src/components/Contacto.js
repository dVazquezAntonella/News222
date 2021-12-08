import React, { Component } from 'react';
import whatsapp from '../assets/img/whatsapp.png';
import gmail from '../assets/img/gmail.png';
import { NavLink } from 'react-router-dom';
import Mapa from '../assets/img/Mapa.png';



class Contacto extends Component {



    render() {

        return (
            <div>
                <div className="cabeza"><p>Contacto</p></div>
                <div className="contenedor">
                    <div className="contacto">
                        <h3>¿Tienes alguna duda sobre el funcionamiento de la App?</h3>
                        <h4>Visitanos en:</h4>
                        <p>Durango - Mezquital, 34308 Gabino Santillán, Dgo.</p>
                        <div className="Mapa">
                        <img src={Mapa} alt="Mapa" />
                        </div>
                        <h4>Mandanos un mensaje</h4>
                        <div className="pequeños" >
                        <NavLink to="/whats" ><img src={whatsapp} alt="Logo WhatsApp" /></NavLink><p>618-322-04-98</p>
                        <img src={gmail} alt="Logo Gmail" /><p>equipo_5@utd.edu.mx</p>
                        </div>
                    </div>

                </div>
            </div >

        );

    }


}

export default Contacto;