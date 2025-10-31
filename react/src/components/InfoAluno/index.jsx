import { useState } from 'react'
import './style.css'

export default function InfoAluno(){
    const[nome, setNome] = useState("Guilherme")
    const[email, setEmail] = useState("guilherme@example.com")
    const[cpf, setCPF] = useState("778.444.675-69")

    return(
        <div className='info-aluno'>
        <h2>Dados do aluno</h2>
        <p><strong>Nome: </strong> {nome} </p>
        <p><strong>Email: </strong>{email}</p>
        <p><strong>CPF: </strong>{cpf}</p>
        </div>
        
    )
}