import React from "react";
import Menu from "../componentes/menu";
import Gimnasios_list from "../componentes/gimnasios_list";

function Gimnasios(){
  return(
    <div>
      <Menu/>
      <Gimnasios_list/>
    </div>
  );
}
export default Gimnasios;