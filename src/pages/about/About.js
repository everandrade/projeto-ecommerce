import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
    return (
        <div className='main-about'>
            <div className='about'>
                <h2>Quem somos</h2>
                <div>
                    <p>Somos uma loja online que oferece o melhor para os nossos clientes, onde podemos atender todas as expectativas sobre a moda espacial sempre de olho nas tendências e lançamentos.</p>
                    <p>Nossa loja oferece o que há de mais moderno e atual em camisetas.</p>
                    <p>Desde o princípio, nossa preocupação é oferecer os melhores produtos com os melhores preços aliado a um ótimo atendimento a você cliente, que é a pessoa mais importante para nós.</p>
                </div>
            </div>
            <div className='safety-about'>
                <h2>É seguro comprar na MoonShop?</h2>
                <div>
                    <p>Nós achamos fundamental qualquer cliente pesquisar a loja antes de fazer suas compras!</p>
                    <p>Por isso vamos dar algumas dicas de como fazer isso para você se sentir 100% segura(o) no momento da sua compra.</p>
                    <p>Veja o que os clientes estão dizendo sobre a Moonshop, pesquisando no <a href='www.google.com'>Google</a>, observando o Perfil do <a href='www.instagram.com'>Instagram</a> você irá encontrar muitas fotos de clientes usando nossos Looks e depoimentos mega satisfeitos com os produtos, atendimento e prazo de entrega!</p>
                    <p>Todos os nossos produtos são de <strong>Ótima Qualidade</strong> com conforto e caimento perfeito.</p>
                    <p>Você terá uma <strong>Incrível Experiência</strong> de compra conosco e será um <strong>Cliente Fiel</strong> ☺ </p>
                </div>
            </div>
            <div className='payment-about'>
                <h2>Formas de Pagamento:</h2>
                <div>
                    <p>Você poderá usar as Seguintes formas de Pagamento em nosso site:</p>
                    <p>→ Cartão de Crédito, podendo parcelar em até <strong>6X Sem Juros</strong>.</p>
                    <p>→ Boleto Bancário à Vista.</p>
                    <p>→ Depósito ou Transferência Bancária com <strong>10% de Desconto</strong>.</p>
                </div>
            </div>
            <div className='send-about'>
                <h2>Envio e prazo:</h2>
                <div>
                    <p>Enviamos os produtos bem embalados e seguros para todo Brasil via Correios.</p>
                    <p>Seu pedido será despachado em até 3 dias uteis após a aprovação do pagamento.
                    </p>
                    <p>O prazo pode ser calculado na pagina do produto colocando seu CEP no campo de cálculo de prazo e frete.</p>
                </div>
            </div>
            <div className='question-about'>
                <h2>Ainda com dúvidas?</h2>
                <p>Converse conosco <Link to="/contact">aqui!</Link></p>
            </div>
        </div>
    )
}

export default About
