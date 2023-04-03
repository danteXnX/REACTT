import React from 'react';
import PropTypes from 'prop-types';
import { Contacto } from '../../models/contacto.class';


const ContactoC = ({contacto}) => {
    return (
        <div>
            <h1>Nombre {contacto.nombre}</h1>
            <h1>Apellido: {contacto.apellido}</h1>
            <h2>Email: {contacto.email}</h2>
            <h5>Contacto? {contacto.conectado ? 'Linea':'No Disponible' }</h5>
        </div>
    );
};


ContactoC.propTypes = {
    contacto: PropTypes.instanceOf(Contacto)
};


export default ContactoC;
