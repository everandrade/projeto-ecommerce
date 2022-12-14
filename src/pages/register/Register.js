import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
const login = () =>{
    alert("Usuário cadastrado!")
}

    return (
        <div className="box">
            <div className="form-box">
                <h2>Criar Conta</h2>
                <p> Já é um membro? <Link to="/login">Login!</Link>  </p>
                <form className='form-margin' action="#">
                    <div className="input-group">
                        <label > Nome Completo</label>
                        <input type="text" id="nome" placeholder="Digite o seu nome completo" required />
                    </div>
                    <div className="input-group">
                        <label >E-mail</label>
                        <input type="email" id="email" placeholder="Digite o seu email" required />
                    </div>
                    <div className="input-group">
                        <label >Telefone</label>
                        <input type="tel" id="telefone" placeholder="Digite o seu telefone" required />
                    </div>
                    <div className="input-group w50">
                        <label >Senha</label>
                        <input type="password" id="senha" placeholder="Digite sua senha" required />
                    </div>
                    <div className="input-group w50">
                        <label >Confirmar Senha</label>
                        <input type="password" id="Confirmarsenha" placeholder="Confirme a senha" required />
                    </div>
                    <div className="input-group">
                        <button onClick={login}>Cadastrar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register
