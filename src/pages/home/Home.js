import React from 'react'
import Offer from "../../Images/Offer.jpg"
import { Link } from 'react-router-dom'

const Home = () => {

    const offer = Offer;

    const handleSubmit = (e) => {
        alert("Nome e e-mail cadastrados!")
    }

    return (
        <div className='offer'>
            <div className='offer-image'>
                <Link to={`/products/`}>
                    <img src={offer} alt="imagem com oferta" />
                </Link>
            </div>
            <div className='register'>
                <h4>Receba ofertas e descontos exclusivos</h4>
                <form>
                    <div className='input-register'>
                        <label>
                            <input
                                className='input-border'
                                type="text"
                                name="name"
                                placeholder='Seu nome...'
                                autoComplete="off" />
                        </label>
                        <label>
                            <input
                                className='input-border'
                                type="email"
                                name="name"
                                placeholder='Seu e-mail...'
                                autoComplete="off" />
                        </label>
                        <button
                            className='button-register'
                            onClick={handleSubmit}>Cadastre-se!</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Home
