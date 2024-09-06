import React from "react";
import entrenador1 from "../imagenes/entrenador1.png";
import { FaInstagram } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { AiOutlineWhatsApp } from "react-icons/ai";
import entrenador2 from "../imagenes/entrenador2.png";
import entrenador3 from "../imagenes/entrenador3.png";

function Entrenadores_list() {
  return (
    <div className="container">
      <section className="pb-5"></section>
      <div className="card">
        <img src={entrenador1} className="card-img-top rounded mx-auto d-block" alt="imagen"></img>

        <div className="card-body">
          <h5 className="card-title">Miguel Cárdenas</h5>
          <p className="card-text">
          <li>25 años</li>
          <li>5 años siendo entrenador</li>
          <li>$40.000 una sesión completa</li>
          <li>$950.000 mes completo</li>
          <li><FaInstagram />migue_cardenas23</li>
          <li><IoIosMail />miguelcardenasentrenador@gmail.com</li>
          <li><AiOutlineWhatsApp />3225232070</li>
          </p>
          <a href="#" className="btn btn-primary">Contactar</a>
        </div>
      </div>
      <section className="pb-5"></section>
      <div className="card">
        <img src={entrenador2} className="card-img-top rounded mx-auto d-block" alt="imagen"></img>
        <div className="card-body">
          <h5 className="card-title">Santiago Bocanegra</h5>
          <p className="card-text">
          <li>30 años</li>
          <li>3 años siendo entrenador</li>
          <li>$30.000 una sesión completa</li>
          <li>$750.000 mes completo</li>
          <li><FaInstagram />_santi.boca</li>
          <li><IoIosMail />santiagobocanegra@gmail.com</li>
          <li><AiOutlineWhatsApp />3006421148</li>
          </p>
          <a href="#" className="btn btn-primary">Contactar</a>
        </div>
      </div>
      <section className="pb-5"></section>
      <div className="card">
        <img src={entrenador3} className="card-img-top rounded mx-auto d-block" alt="imagen"></img>
        <div className="card-body">
          <h5 className="card-title">Mauricio Pineda</h5>
          <p className="card-text">
          <li>46 años</li>
          <li>24 años siendo entrenador</li>
          <li>$50.000 una sesión completa</li>
          <li>$1'000.000 mes completo</li>
          <li><FaInstagram />mauri.pine_</li>
          <li><IoIosMail />mauriciopineda20@gmail.com</li>
          <li><AiOutlineWhatsApp />3137375965</li>
          </p>
          <a href="#" className="btn btn-primary">Contactar</a>
        </div>
      </div>
      <section className="pb-5"></section>
      <figure className="text-center">
        <blockquote className="blockquote">
          <p><strong><cite title="Source Title">Transforma tu cuerpo, fortalece tu mente, vive en equilibrio</cite></strong></p>
        </blockquote>
        <figcaption className="blockquote-footer">
          Un mensaje <cite title="Source Title">Gymstar's</cite>
        </figcaption>
      </figure>
    </div>
  );
}

export default Entrenadores_list;
