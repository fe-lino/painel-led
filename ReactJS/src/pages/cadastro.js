import React, { Component } from "react";
import logo from '../../src/assets/img/logoCadastro.png'
import logoSenai from '../../src/assets/img/logoSenai.svg'
import '../../src/styles/cadastro.css'

export default function Cadastro() {

    
    return(
        <div className='main'>
            <div className="ladoB">
                <img className='logo' src={logo} alt='Logo Senai'></img>
            </div>

            <div className="ladoV">
                    <img className='logoSenai' src={logoSenai}></img>
                <div className='divForm'>

                    <form className='formulario'>
                        <label>Nome</label>
                        <input 
                        type='text' 
                        name='nomeUsuario' 
                  
                    
                        ></input>

                        <label>Email</label>
                        <input 
                        type='email' 
                        nome='email'
                
         
                        ></input>

                        <label>Senha</label>
                        <input
                        type='password'
                        name='senha'
             
           
                        ></input>

                        <div className='divBotao'>
                        <button 
                        type='button'>Cadastrar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );

    
};