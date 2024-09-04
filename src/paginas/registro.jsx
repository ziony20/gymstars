import React from 'react';
import Menu from '../componentes/menu';
import Registro_usuario from '../componentes/resgisto_usuario'

function Registro(){
  return (
    <div className='Registro'>
      <Menu/>
      <Registro_usuario/>
    </div>

  );
}

export default Registro