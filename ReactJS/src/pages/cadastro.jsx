import React, { Component } from "react";
import logo from '../../src/assets/img/logoCadastro.png'
import logoSenai from '../../src/assets/img/logoSenai.svg'
import '../../src/styles/cadastro.css'
import api from "../services/api";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default class Cadastro extends Component {

    constructor(props){
        super(props);
        this.state = {
            listaUsuario : [  ],
            nome : '',
            email : '',
            senha : '',
            tipoUsuario : '',
            
        }
    }

    cadastrarUsuarios = (event) =>{
      
        event.preventDefault();
        this.setState({isLoading: true});

        let cadastro = {
            nomeUsuario: this.state.nome,
            email: this.state.email,
            senha: this.state.senha,
            tipoUsuario: this.state.tipoUsuario,

        };

        axios.post('http://localhost:5000/api/Usuarios')
        
        .then(resposta => {
            if (resposta.status === 201) {
                console.log('Evento cadastrado');
            }
        })

        
    }

    componentDidMount(){
        console.log(this.state.listaUsuario)
        this.cadastrarUsuarios();
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
                            onChange={this.atualizaStateCampo}
                            ></input>

                            <label>Email</label>
                            <input 
                            type='email' 
                            nome='email'
                            required
                            onChange={this.atualizaStateCampo}
                            ></input>

                            <label>Senha</label>
                            <input
                            type='password'
                            name='senha'
                            required
                            onChange={this.atualizaStateCampo}
                            ></input>

                            <label>Tipo Usuário</label>
                            <select className='selectTU' required onChange={this.atualizaStateCampo}>

                                <option></option>
                                <option value='1'>Administrador</option>
                                <option value='2' >Comum</option> 
                                <option value='3' >TV</option> 
                                
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