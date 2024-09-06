import React from "react";
import gimnasio1 from "../imagenes/gimnasio1.png";
import gimnasio2 from "../imagenes/gimnasio2.png";
import gimnasio3 from "../imagenes/gimnasio3.png";
import { FaInstagram } from "react-icons/fa";


function Gimnasios_list(){
  return(
    <div className="container">
      <section className="pb-5">
      <div id="carouselExampleIndicators" class="carousel slide">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={gimnasio1} class="d-block w-100" alt="imagen"></img>
          </div>
          <div class="carousel-item">
            <img src={gimnasio2} class="d-block w-100" alt="imagen"></img>
          </div>
          <div class="carousel-item">
            <img src={gimnasio3} class="d-block w-100" alt="imagen"></img>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Siguiente</span>
        </button>
      </div>
        </section>
      <section className="pb-5">
        <h4>Aquí encontrarás los mejores gimnasios</h4>
      </section>
      <section className="pb-5">
      <div class="card">
        <img src={gimnasio3} class="card-img-top" alt="imagen"></img>
        <div class="card-body">
          <h5 class="card-title">Ultra Gym</h5>
          <p class="card-text">En Ultra nos caracterizamos por tener las mejores clases grupales del mercado. Capacitando constantemente a nuestro equipo e innovando para estar siempre a la vanguardia del fitness.</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item"><strong>Precios</strong><ul><li>Desde $160.000 hasta $230.000 mensual.</li></ul></li>
          <li class="list-group-item"><strong>Horarios</strong><ul><li>Lun a Vie 5:00 a. m a 9:00 p. m</li></ul>
            <ul><li>Sáb, Dom, Fest 7:00 a. m a 3:00 p. m</li></ul></li>
          <li class="list-group-item"><FaInstagram /> ultra.gym
</li>
        </ul>
        <div class="card-body">
          <a href="https://ultragym.co/" class="card-link" to="https://www.instagram.com/ultra.gym/?hl=es">Página directa</a>
        </div>
      </div>
      </section>
      <section className="pb-5">
      <div class="card">
        <img src={gimnasio2} class="card-img-top" alt="imagen"></img>
        <div class="card-body">
          <h5 class="card-title">Atlethic Gym</h5>
          <p class="card-text">Aquí te pones melo sin gastar una fortuna. Únete hoy y descubre cómo entrenar como un duro sin que tu bolsillo sufra. ¡Aprovecha esta chimba de oportunidad y no te quedes por fuera!</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item"><strong>Precios:</strong>
          <ul>Desde $59.900 hasta $69.900 mensual.</ul></li>
          <li class="list-group-item">
            <strong>Horarios:</strong>
            <ul><li>Lun a Jue 5:00 a. m a 10:00 p. m</li></ul>
            <ul><li>Viernes 5:00 a. m a 9:00 p. m</li></ul>
              <ul><li>Sábado 6:00 a. m a 6:00 p. m</li></ul>
                <ul><li>Dom/Fest 7:00 a. m a 5:00 p. m</li></ul></li>
          <li class="list-group-item"><FaInstagram /> athleticol</li>
        </ul>
        <div class="card-body">
          <a href="https://athleticgym.com.co/" class="card-link">Pagina directa</a>
        </div>
      </div>
        </section>
      <section className="pb-5">
      <div class="card">
        <img src={gimnasio1} class="card-img-top" alt="imagen"></img>
        <div class="card-body">
          <h5 class="card-title">Smart Fit</h5>
          <p class="card-text">Nuestra misión es transformar lo complicado en simple, es decir, aquí tendrás comodidad y menos burocracia desde los servicios en línea hasta el autoservicio en las unidades.</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            <strong>Precios:</strong>
            <ul>Desde $69.900 hasta $180.900 mensual.</ul></li>
          <li class="list-group-item">
            <strong>Horarios:</strong>
            <ul><li>Lun a Jue 5h - 22h</li></ul>
            <ul><li>Vie 5h - 21h Sáb 7h - 17h</li></ul>
            <ul><li>Dom/Feriados 8h - 17h</li></ul></li>
          <li class="list-group-item"><FaInstagram /> smarfitco</li>
        </ul>
        <div class="card-body">
          <a href="https://www.smartfit.com.co/?utm_campaign=co_mltp_all_ao_aomarca_conv_2023&utm_medium=cpc&utm_source=google&gad_source=1&gclid=Cj0KCQjw0Oq2BhCCARIsAA5hubUqKDqrW8eviAKeht835i24huBkEVFN6BzRzBgxr21pUSfv1u1g2hwaAnNREALw_wcB" class="card-link">Pagina directa</a>
        </div>
      </div>
      </section>
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

export default Gimnasios_list