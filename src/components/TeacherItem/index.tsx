import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import './styles.css';

function TeacherItem(){
    return(
        <article className="teacher-item">
            <header>
                <img src="https://avatars3.githubusercontent.com/u/54032448?s=460&u=e0b426d911f585d3eb72915c508357f522289237&v=4" alt="Diogo Almazan"/>
                <div>
                    <strong>Diego Fernandes</strong>
                    <span>Química</span>
                </div>
            </header>

            <p>
                Entuasiasta das melhores tecnologias de química avançada.
                <br/><br/>
                Apaixonado por xeplodir coisas em laboratório e por mudar a vida das pessoas através de exepriências. Mais de 200000 pessoas já passaram por uma explosão comigo.
            </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 80,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp"/>
                    Entrar em contato
                </button>
            </footer>
        </article>
    );
}

export default TeacherItem;