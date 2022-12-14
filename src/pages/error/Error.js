import React from 'react'
import { Link } from 'react-router-dom';
import Erro from "../../Images/Error.jpg"

const Error = () => {
    const erro = Erro;

    return (
        <div className='main-error'>
            <div className='image-error'>
                <img className='page-error' src={erro} alt="página não encontrada" />
                <Link to="/"><button className='button-error'>Voltar página inicial?</button></Link>
            </div>
        </div>
    )
}

export default Error
