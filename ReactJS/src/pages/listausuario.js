import React, { Component } from "react";
import logo from '../../src/assets/img/Logo.svg'
import user from '../../src/assets/img/User.svg'
import Edit from '../../src/assets/img/editar.svg'
import Exc from '../../src/assets/img/excluir.svg'
import Add from '../../src/assets/img/Add.svg'
import cadastro from "../../src/pages/cadastro.js";
import '../../src/styles/listaUsuario.css'
import { Link } from "react-router-dom";


export default function Listar() {

    return(
        <body className='body'>
            <header className='container'>
                <div className='logoTexto'>
                    <h1>Configurando Painel</h1>
                    <img src={logo}></img>
                </div>
                <img src={user}></img>
            </header>

            <main>
                <div className='titulo'>
                    <h2>Usuários</h2>
                </div>
                
                <section className='tabela'>
                    <div className='labels'>
                        <p>Id</p>
                        <p>Usuário</p>
                        <p>Email</p>
                        <p>Tipo de Usuário</p>
                        <p>Ações</p>
                    </div>
                    <div className='icones'>
                        <button>
                        <img src={Edit}></img>
                        </button>
                        <button>
                        <img src={Exc}></img>
                        </button>
                    </div>
                </section>

                {/* <div>
                    <img id='button' src={Add} onClick={Redirect} ></img>
                </div> */}

                <Link to='/cadastro'>
                    <img id='button' src={Add}/>
                </Link>

                
            </main>
        </body>
    );

    
};