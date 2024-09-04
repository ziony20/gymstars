import React from "react";
import Menu_login from "../componentes/menu_login";
import Profile from "../componentes/perfil";

function Inicio_sesion() {
  return(
    <div  className='Inicio'>
      <Menu_login/>
      <Profile/>
    </div>
  );
}

export default Inicio_sesion