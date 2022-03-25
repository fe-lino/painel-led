import React from "react";
import logo from '../../src/assets/img/logoCadastro.png'
import logoSenai from '../../src/assets/img/logoSenai.svg'
import '../../src/styles/cadastro.css'

export default function Cadastro() {
    
    return(
        <div className='main'>
            <div className="ladoB">
                <img className='logo' src={logo}></img>
            </div>

            <div className="ladoV">
                    <img className='logoSenai' src={logoSenai}></img>
                <div className='divForm'>

                    <form className='formulario'>
                        <label>Nome</label>
                        <input type='text'></input>

                        <label>Email</label>
                        <input type='email'></input>

                        <label>Senha</label>
                        <input type='password'></input>

                        <div className='divBotao'>
                        <button type='submit'>Conectar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
    
};