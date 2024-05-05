import React from 'react'
import './ContactForm.css'

const ContactForm = () => {
  return (
    <div className='contact-form-contact'>
        <form>
            <div className='name-container'>
                <input type='text' name='nome' placeholder='Nome'/>
                <input type='text' name='sobrenome' placeholder='Sobreome'/>
            </div>

            <input type='text' name='email' placeholder='Email'/>
            <textarea type='text' name='mensagem' placeholder='Mensagem' rows={3}/>

            <button>Enviar</button>

        </form>
    </div>
  )
}

export default ContactForm