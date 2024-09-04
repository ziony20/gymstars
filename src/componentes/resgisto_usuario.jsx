import React from 'react'

function Registro_usuario(){
  return (
    <div className='Registro'>
      <div className="container">
        <div className="row">

          <form className="row g-3">
            <div className="col-md-4">
              <label for="validationDefault01" className="form-label">Primer nombre</label>
              <input type="text" className="form-control" id="validationDefault01" value="" required></input>
            </div>
            <div className="col-md-4">
              <label for="validationDefault02" className="form-label">Último nombre</label>
              <input type="text" className="form-control"id="validationDefault02" value="" required></input>
            </div>
            <div className="col-md-4">
              <label for="validationDefaultUsername" className="form-label">Nombre de usuario</label>
              <div className="input-group">
                <span className="input-group-text" id="inputGroupPrepend2">@</span>
                <input type="text" className="form-control" id="validationDefaultUsername" aria-describedby="inputGroupPrepend2" required></input>
              </div>
            </div>
            <div className="col-md-6">
              <label for="validationDefault03" className="form-label">Ciudad</label>
              <input type="text" className="form-control" id="validationDefault03" required></input>
            </div>
            <div className="col-md-3">
              <label for="validationDefault04" className="form-label">Departamento</label>
              <select className="form-select" id="validationDefault04" required>
                <option selected disabled value="">Escoge...</option>
                <option>...</option>
              </select>
            </div>
            <div className="col-md-3">
              <label for="validationDefault05" className="form-label">Zip</label>
              <input type="text" className="form-control" id="validationDefault05" required></input>
            </div>
            <div className="col-12">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="invalidCheck2" required></input>
                <label className="form-check-label" for="invalidCheck2">
                  Aceptar términos y condiciones
                </label>
              </div>
            </div>
            <div className="col-12">
              <button className="btn btn-primary" type="submit">Enviar formulario</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Registro_usuario