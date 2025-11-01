import './style.css'

export default function(){
    return(
        <footer>
            <p className='footer-text'>
                &copy; {new Date().getFullYear()} - Todos os direitos reservados.
                <br/> SENAI Dendezeiros
            </p>
        </footer>
    )
}