import React from "react";
import { Link } from "react-router-dom";
import pdp from "../imagenes/pdp.png";
import { RiGlobalFill } from "react-icons/ri";
import { BsGithub } from "react-icons/bs";
import { IoLogoTwitter } from "react-icons/io";
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";

function Pie_de_pagina() {
  return (
    <div className="footer">
      <div className="container fluid">
        <div className="row mx-auto">
          <div className="text-center mx-auto">
            <h2 className="encabezado mt-5 pt-4">Gymstar's</h2>
            <img src={pdp} alt="imagen" width={300} />
            <h4 className="encabezado">
              "Cambia tu vida, entrena tu físico, ama tu salud"
            </h4>
            <p className="px-3">
              <small>Las mejores opciones para ti las encuentras aquí</small>
            </p>
            <section className="text-center pb-4">
              <Link to="/contactanos" className="btn btn-primary">
                conoce más sobre nosotros
              </Link>
            </section>
          </div>
          <div id="copyright">
            <div className="card mb-4 mb-lg-0">
              <div className="card-body p-0">
                <ul className="list-group list-group-flush rounded-3">
                  <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                    <RiGlobalFill />
                    <p className="mb-0">https://gymstars-223.weebly.com</p>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                    <BsGithub />
                    <p className="mb-0">Gymstar's</p>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                    <IoLogoTwitter style={{ color: "#55acee" }} />
                    <p className="mb-0">@gym_stars</p>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                    <BsInstagram style={{ color: "#ac2bac" }} />
                    <p className="mb-0">gym_stars</p>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                    <BsFacebook style={{ color: "#3b5998" }} />
                    <p className="mb-0">gymstars</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pie_de_pagina;
