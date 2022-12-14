import React from 'react'

const Contact = () => {
    return (
        <div className='contact'>
            <div>
                <div className='contact-whatsapp'>
                <h2>Entre em contato conosco:</h2>
                <p>Converse com nossos atendentes pelo Whatsapp (11) 99999-1234 e tire qualquer dúvida para efetuar sua compra com tranquilidade. Nosso Atendimento é de Segunda a Sexta das 10 as 17hs.</p>
            </div>
            <div className='contact-email'>
                <h2>E-mail:</h2>
                <p>Entre em contato conosco através do e-mail <u className='contact-email-adress'>moonshop@moonshop.com.br</u></p>
            </div>
            <div className='contact-adress'>
                <h2>Nosso endereço:</h2>
                <div>Moonshop
                    <p>Rua das galáxias, 116</p>
                    <p>Bairro: pantanal</p>
                    <p>Caixa postal 123</p>
                    <p>Florianópolis - SC</p>
                    <p>CEP 88040-001</p>
                </div>
            </div>
            <div className='contact-cnpj'>
                <h2>Dados da empresa:</h2>
                <div>CNPJ 12.123.123/0001-01</div>
            </div>
            </div>
        </div>
    )
}

export default Contact
