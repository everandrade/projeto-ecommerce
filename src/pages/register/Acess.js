import React from 'react'
import { Link } from 'react-router-dom'

const Acess = () => {
const login = () =>(
    alert("Usuário logado!")
)

    return (
        <div className="box">
            <div className="form-box">
                <h2>Faça login</h2>
                <p> Não é um membro? <Link to="/acess">Cadastre-se!</Link>  </p>
                <form className='form-margin' action="#">
                    <div className="input-group">
                    <label >E-mail</label>
                        <input 
                        type="email" 
                        id="email" 
                        placeholder="Digite o seu email" 
                        autoComplete="off"
                        required />
                    </div>
                    <div className="input-group">
                        <label >Senha</label>
                        <input 
                        type="password" 
                        id="password" 
                        placeholder="Digite sua senha" 
                        autoComplete="off"
                        required />
                    </div>
                    <div className="input-group">
                        <button onClick={login}>Entrar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Acess
