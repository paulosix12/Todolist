import React from 'react';
import './Tarefas.css';

class Tarefas extends React.Component {

    constructor(){
        super();
        this.state = {
            tarefa : "",
            tarefas : []
        }

        this.adicionTarefas= this.adicionTarefas.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    render(){ 
            return (
            <React.Fragment>
                <h1>Todo List</h1>
                <input onChange={  this.handleChange } value={this.state.tarefa} />
                <button onClick={ this.adicionTarefas}>Adicionar</button>
                <ul>
                    { this.state.tarefas.map(tarefa =>
                        <div>
                            <li key={tarefa}>{ tarefa }</li>
                        </div>
                    )}
                </ul>
            </React.Fragment>
            );
        }

        adicionTarefas(){
            const { tarefa, tarefas } = this.state;
            this.setState({ 
                tarefa: "",
                tarefas : [].concat(tarefas, tarefa)
            })
        }

        handleChange(event){
            this.setState({  tarefa : event.target.value })
            console.log(event.target.value)
        }

}

export default Tarefas;