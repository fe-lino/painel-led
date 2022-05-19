import React, { Component } from "react";
import logo from '../../src/assets/img/logoCadastro.png'
import logoSenai from '../../src/assets/img/logoSenai.svg'
import '../../src/styles/cadastro.css'
import api from "../services/api";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default class Cadastro extends Component {

    constructor(props) {
        super(props);
        this.state = {
            listaUsuario: [],
            nome: "",
            email: "",
            senha: "",
            idTipoUsuario: 0,

        }
    }

    cadastrarUsuarios = (event) => {

        this.setState({ isLoading: true });
        event.preventDefault();

        let cadastro = {
            nomeUsuario: this.state.nomeUsuario,
            email: this.state.email,
            senha: this.state.senha,
            idTipoUsuario: this.state.idTipoUsuario,

        };

        axios.post('https://tccbackend.azurewebsites.net/api/Usuarios', cadastro,
            {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('')
                }
            })

            .then(resposta => {
                if (resposta.status === 200) {
                    console.log('Usuário cadastrado');
                    window.location.replace("http://localhost:3000")
                    // window.location.reload(true);
                }
            })

            .catch(erro => {
                console.log(erro);
                this.setState({ isLoading: false })
            })

    }

    atualizaStateCampo = (campo) => {
        this.setState({ [campo.target.name]: campo.target.value })
    };


    // componentDidMount(){
    //     console.log(this.state.listaUsuario)
    // }

    render() {

        return (
            <div className='main'>
                <div className="ladoB">
                    <img className='logo' src={logo} alt='Logo Senai'></img>
                </div>

                <div className="ladoV">
                    <img className='logoSenai' src={logoSenai}></img>
                    <div className='divForm'>

                        <form onSubmit={this.cadastrarUsuarios} className='formulario'>
                            <label>Nome</label>
                            <input
                                type='text'
                                name='nomeUsuario'
                                value={this.state.nomeUsuario}
                                required
                                onChange={this.atualizaStateCampo}
                            ></input>

                            <label>Email</label>
                            <input
                                type='email'
                                name='email'
                                value={this.state.email}
                                required
                                onChange={this.atualizaStateCampo}
                            ></input>

                            <label>Senha</label>
                            <input
                                type='password'
                                name='senha'
                                value={this.state.senha}
                                required
                                onChange={this.atualizaStateCampo}
                            ></input>

                            <label>Tipo Usuário</label>
                          
                            <select
                                className='selectTU'
                                required
                                name='idTipoUsuario'
                                value={this.state.idTipoUsuario}
                                onChange={this.atualizaStateCampo}
                            >

                                <option value='0'></option>
                                <option value='1'>Administrador</option>
                                <option value='2' >Comum</option>
                                <option value='3' >TV</option>
                            </select>

                            <div className='divBotao'>

                    
                                <button type='submit'
                                    onClick={this.cadastrarUsuarios}
                                    >
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