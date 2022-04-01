import React, { Component } from "react";
import logo from '../../src/assets/img/logoCadastro.png'
import logoSenai from '../../src/assets/img/logoSenai.svg'
import '../../src/styles/cadastro.css'
import { Link } from "react-router-dom";

export default class Cadastro extends Component {

    constructor(props){
        super(props);
        this.state = {
            listaUsuario : [ {idUsuario : 1, nome : 'Juscelino', email :'teste@teste.com', senha :'12345678'} ],
            nome : '',
            email : '',
            senha : '',
            tipoUsuario : '',
        }
    }

    componentDidMount(){
        console.log(this.state.listaUsuario)
    }
 
    render(){

        return(
            <div className='main'>
                <div className="ladoB">
                    <img className='logo' src={logo} alt='Logo Senai'></img>
                </div>

                <div className="ladoV">
                        <img className='logoSenai' src={logoSenai}></img>
                    <div className='divForm'>

                        <form method="get" action='/' className='formulario'>
                            <label>Nome</label>
                            <input 
                            type='text' 
                            name='nomeUsuario'
                            required
                        
                            ></input>

                            <label>Email</label>
                            <input 
                            type='email' 
                            nome='email'
                            required
            
                            ></input>

                            <label>Senha</label>
                            <input
                            type='password'
                            name='senha'
                            required
            
                            ></input>

                            <label>Tipo Usuário</label>
                            <select className='selectTU' required>

                                <option></option>
                                <option>Administrador</option>
                                <option>Comum</option>

                            </select>

                            <div className='divBotao'>

                 
                                <button type='submit' to='/'>
                                    Cadastrar
                                </button>


                            </div>
                            
                        </form>

                    </div>
                </div>
            </div>
        );

    }
};