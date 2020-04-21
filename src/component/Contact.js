import React from 'react';
import './contact.css';
import Fade from 'react-reveal/Fade';

const Contact = () => (
    <Fade left>
        <div className='Contact' id="contact">
            <h1>Contact:</h1>
            <p>contact@made-in-francophonie.net</p>
            <div className='footer'>
                <div className='first'>
                    <p>
                        Made In Francophonie
                    </p>
                    <p>
                        Association loi 1901 d'intéret général , sans but lucratif
                    </p>
                    <p>
                        Créeé le 09/07/2019 ,parution au journal Officiel le 20/07/2019
                    </p>
                </div>
                <div className='second'>
                    <p>Siège Social : 20 Rue Henri IV , 51100 Reims</p>
                    <p>Siret : 879 203 842 00015</p>
                    <p>RNA W5130008860</p>
                </div>
            </div>
        </div>
    </Fade>
)

export default Contact;