import { useState } from 'react'
import './style.css'

export default function InfoCurso() {
    // Criando variáveis
    // useState é uma função do ReactJs
    // Também chamada de Hooks
    const [nome , setNome] = useState("Desenvolvimento de Sistema")
    const[cargaHorario, setCargaHoraria] = useState("158 Horas")
    const[local, setLocal] = useState("SENAI")
    return (
        <div className = 'info-curso'>
            <h2>Dados do curso</h2>
            <p><strong>Nome: </strong> {nome} </p>
            <p><strong>Carga horária: </strong>{cargaHorario}</p>
            <p><strong>Local: </strong>{local}</p>
        </div>
    )

}
