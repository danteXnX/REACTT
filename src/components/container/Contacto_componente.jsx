import React from 'react';
import { Contacto } from '../../models/contacto.class'
import ContactoC from '../pure/contacto'

const ContactoComponente = () => {

    const defaulContacto = new Contacto('Justin','Mora','aa@gmail.com',false)
    
    return (
        <div>
      <ContactoC contacto={defaulContacto}> </ContactoC>      
        </div>
    );
};





export default ContactoComponente;
