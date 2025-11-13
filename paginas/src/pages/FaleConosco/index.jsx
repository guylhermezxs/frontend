import './style.css'

export default function FaleConosco() {
  function handleSubmit(event) {
    event.preventDefault()
    alert("Mensagem envidada com sucesso.")
  }
  
  return (
    <section className='contato'>
      <h1>Fale conosco</h1>
      <p>Tire dúvidas e peça um orçamento sem compromisso.</p>
      
      <form className='form' onSubmit={handleSubmit}>
        <div>
          <label className='campo'>
            <span>Nome</span>
            <input type='text' required placeholer= 'Seu nome'/>
          </label>
          <label className='campo'>
            <span>E-mail</span>
            <input type='email' required placeholer= 'Seu e-mail'/>
          </label>
          <label className="campo">
            <span>Telefone</span>
            <input type='tel' required placeholer= '(00) 99999-9999'/>
          </label>
        </div>
        
        <label className='campo'>
          <span>Mensagem</span>
          <textarea rowns = '6' required placeholder= 'Conte-nos um pouco do seu caso...'/>
        </label>
        
        <button type='submit'>Enviar</button>
      </form>
    </section>
  )
}