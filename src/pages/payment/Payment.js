import React from 'react'

const Payment = () => {
    const paymentSuccessful = () => {
        alert("Pagamento realizado com sucesso!")
    }

    return (
        <div>
            <div className="wrapper">
                <h2>Pagamento</h2>
                <form method="POST">
                    <h4>Conta do usuário</h4>
                    <div className="input-group-payment">
                        <div className="input-box-payment">
                            <input
                                type="text"
                                placeholder="Nome"
                                className="name-payment"
                                required />
                            <i className="fa fa-user icon"></i>
                        </div>
                        <div className="input-box-payment">
                            <input
                                type="text"
                                placeholder="Sobrenome"
                                className="name-payment"
                                required />
                            <i className="fa fa-user icon"></i>
                        </div>
                    </div>
                    <div className="input-group-payment">
                        <div className="input-box-payment">
                            <input
                                type="email"
                                placeholder="Endereço de e-mail"
                                className="name-payment"
                                required />
                            <i className="fa fa-envelope icon"></i>
                        </div>
                    </div>
                    <div className="input-group-payment">
                        <div className="input-box-payment">
                            <h4> Data de aniversário</h4>
                            <input
                                type="text"
                                placeholder="DD"
                                className="dob"
                                size="4" />
                            <input
                                type="text"
                                placeholder="MM"
                                className="dob"
                                size="4" />
                            <input
                                type="text"
                                placeholder="AAAA"
                                className="dob"
                                size="8" />
                        </div>
                    </div>
                    <div className="input-group-payment">
                        <div className="input-box-payment">
                            <h4>Detalhe do pagamento</h4>
                            <input
                                type="radio"
                                name="pay"
                                id="bc1"
                                className="radio-payment" />
                            <label >
                                <span><i className="fa fa-cc-visa"></i> Cartão de crédito</span>
                            </label>
                            <input
                                type="radio"
                                name="pay"
                                id="bc2"
                                className="radio-payment" />
                        </div>
                    </div>
                    <div className="input-group-payment">
                        <div className="input-box-payment">
                            <input
                                type="tel"
                                placeholder="Número do cartão"
                                className="name-payment"
                                required />
                            <i className="fa fa-credit-card icon"></i>
                        </div>
                    </div>
                    <div className="input-group-payment">
                        <div className="input-box-payment">
                            <input
                                type="tel"
                                placeholder="CVC do cartão" className="name-payment"
                                required />
                            <i className="fa fa-user icon"></i>
                        </div>
                        <div className="input-box-payment">
                            <select>
                                <option>jan</option>
                                <option>fev</option>
                                <option>mar</option>
                                <option>abr</option>
                                <option>mai</option>
                                <option>jun</option>
                                <option>jul</option>
                                <option>ago</option>
                                <option>set</option>
                                <option>out</option>
                                <option>nov</option>
                                <option>dez</option>
                            </select>
                            <select>
                                <option>2022</option>
                                <option>2023</option>
                                <option>2024</option>
                            </select>
                        </div>
                    </div>
                    <div className="input-group-payment">
                        <div className="input-button-payment">
                            <button
                                onClick={() => paymentSuccessful()} className='button-payment' type="submit">Concluir pagamento</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Payment
