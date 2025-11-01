import { useState } from 'react'
import './style.css'

export default function AdicionarAluno(){
    // Criando e inicializado as variaveis
    const [nome , setNome] = useState("")
    const[email , setEmail] = useState("")

    // Criando um lista para adicionar os nomes dos alunos
    const [listaAlunos , setListaAlunos] = useState([])

    // Função para adicionar dados do aluno na lista de alunos
    const addAluno = (event) => {
        // Evita que a pagina seja recarregada ao adicionar aluno.
        event.preventDefault()
        if(nome && email){
            // Add os dados anteriores + novos dados.
            setListaAlunos([...listaAlunos, {nome , email}])
            // Define o valor dos campos com vazio novamente
            setNome('')
            setEmail('')
        }
    }

    return(
        <div className='formulario'>
            <h2>Registrar Aluno</h2>
            <form  onSubmit={addAluno}>
                <input className='input-nome'
                    type="text"
                    placeholder='Nome'
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                />
                <input className='input-email'
                    type="text"
                    placeholder='Email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button type='submit' className='button'>Adicionar Aluno</button>
                <button type='button' className='button' onClick={() => {setListaAlunos([])}}>Limpar Lista</button>
            </form>

            <hr/>

            <h3>Alunos Registrados</h3>

            <ul className='lista-alunos' type='none'>
                {listaAlunos.map((aluno , index) => (
                    <li key={index}>{aluno.nome} - {aluno.email}</li>
                ))}
            </ul>
        </div>
    )
}