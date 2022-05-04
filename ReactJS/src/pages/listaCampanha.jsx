import React, { Component } from "react";
import { Link } from "react-router-dom";
import '../../src/styles/listaCampanha.css'

export default class Campanha extends Component {

    constructor(props) {
        super(props);
        this.state = {
            listaCampanha: [],
            idUsuario: '1',
            nomeCampanha: '',
            dataInicio: new Date(),
            dataFim: new Date(),
            descricao: '',
            arquivo: ''
        }
    };


    buscarCampanhas = () => {
        fetch('http://localhost:5000/api/Campanhas/ListarTodos')

            .then(resposta => resposta.json())

            .then(dados => this.setState({ listaCampanha: dados }))
    };

    render() {
        return (
            <body>
                <main>
                    <section className="imgCampanha">
                        <img></img>
                    </section>

                    <section>
                        <h2>TESTE NOME</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                            Sit voluptate nostrum,
                            totam vitae quod dolore vero incidunt, ducimus,
                            recusandae ex sint tenetur reprehenderit dignissimos cumque quae eveniet
                            expedita voluptas! Aperiam!</p>
                    </section>

                </main>
            </body>
        );
    }

}