import React from 'react'
import './FormCheckOut.css'

function FormCheckOut({dataForm, handleChangeInput,sendOrder}) {
  return (
    <>
        <h2>Formulario de Contacto</h2>
        <form onSubmit={sendOrder} style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '400px', margin: 'auto',marginTop:'30px' }}>
            <label>
                Nombre:
                <input
                className='inputs'
                type="text"
                name="fullname"
                value={dataForm.fullname}
                onChange={handleChangeInput}
                required
                />
            </label>

            <label>
                Email:
                <input
                className='inputs'
                type="email"
                name="email"
                value={dataForm.email}
                onChange={handleChangeInput}
                required
                />
            </label>
            
            <label>
                Dirección:
                <input
                className='inputs'
                type="text"
                name="direccion"
                value={dataForm.direccion}
                onChange={handleChangeInput}
                required
                />
            </label>

            <label>
                Teléfono:
                <input
                className='inputs'
                type="number"
                name="phone"
                value={dataForm.phone}
                onChange={handleChangeInput}
                />
            </label>

            <button className='finalizarcompra' type="submit">Enviar Orden</button>
        </form>
    </>
  )
}

export default FormCheckOut