import React from "react";
import pdp from "../imagenes/pdp.png";
import { Link } from "react-router-dom";
import logo from "../imagenes/logo.png";
import { CgGym } from "react-icons/cg";
import dietas from "../imagenes/dietas.png";
import gimnasios from "../imagenes/gimnasios.png";

function Portada() {
  return (
    <div className="container">
      <div className="row">
        <div id="carouselExampleCaptions" class="carousel slide">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src={pdp} class="d-block w-100" alt="imagen"></img>
              <div class="carousel-caption d-none d-md-block">
                <h5>First slide label</h5>
                <p>Some representative placeholder content for the first slide.</p>
              </div>
            </div>
            <div class="carousel-item">
              <img src={logo} class="d-block w-100" alt="imagen"></img>
              <div class="carousel-caption d-none d-md-block">
                <h5>Second slide label</h5>
                <p>Some representative placeholder content for the second slide.</p>
              </div>
            </div>
            <div class="carousel-item">
              <img src={dietas} class="d-block w-100" alt="imagen"></img>
              <div class="carousel-caption d-none d-md-block">
                <h5>Third slide label</h5>
                <p>Some representative placeholder content for the third slide.</p>
              </div>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
        <div className="mx-auto">
          <p className="text-center">
            Registrate en Gym'star para empezar a buscar tus gimnasios favoritos
          </p>
        </div>

        <Link to="/registro">
          <div className="d-grid gap-2 d-md-flex justify-content-md-end pb-1">
            <button className="btn btn-primary me-md-2" type="button">
              Registrate
            </button>
          </div>
        </Link>

        <Link to="/login">
          <div className="d-grid gap-2 d-md-flex justify-content-md-end pb-1">
            <button className="btn btn-primary" type="button">
              Iniciar sesión
            </button>
          </div>
        </Link>

        <Link to="/entrenadores">
          <div className="d-grid gap-2 d-md-flex justify-content-md-end pb-1">
            <img
              src={logo}
              className="rounded mx-auto d-block"
              alt="logo"
              style={{ maxWidth: "150px" }}
            ></img>
            <h4 className="text-center"><CgGym/> Entrenadores</h4>
            {/* <button class="btn btn-primary me-md-2" type="button">
              Entrenadores
            </button> */}
          </div>
        </Link>

        <Link to="/dietas">
          <div className="d-grid gap-2 d-md-flex justify-content-md-end pb-1">
            <img
              src={dietas}
              className="rounded mx-auto d-block"
              alt="logo"
              style={{ maxWidth: "150px" }}
            ></img>
            <h4 className="text-center"><CgGym/> Dietas </h4>
          </div>
        </Link>

        <Link to="/gimnasios">
          <div className="d-grid gap-2 d-md-flex justify-content-md-end pb-1">
            <img
              src={gimnasios}
              className="rounded mx-auto d-block"
              alt="logo"
              style={{ maxWidth: "150px" }}
            ></img>
            <h4 className="text-center"><CgGym/> Gimnasios </h4>
          </div>
        </Link>
        <section className="pb-5"></section>
        <nav id="navbar-example2" className="navbar bg-body-tertiary px-3 mb-3">
          <a className="navbar-brand" href="#">Conoce sobre nosotros</a>
          <ul className="nav nav-pills">
            <li className="nav-item">
              <a className="nav-link" href="#scrollspyHeading1">¿Quiénes somos?</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#scrollspyHeading2">¿Para qué sirve la página?</a>
            </li>
                <li className="nav-item"><a class="nav-link" href="#scrollspyHeading3">¿Para quién va dirigido?</a></li>
              
          </ul>
        </nav>
        <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" class="scrollspy-example bg-body-tertiary p-3 rounded-2" tabindex="0">
          <h4 id="scrollspyHeading1"><em>¿Quiénes somos?</em></h4>
          <p>Somos una pareja de jovenes que buscaban emprender de una forma en la cual pudieramos ayudar y facilitarle la vida a nuestros compañeros fitness. Nosotros creamos una página con la idea de colaborarle a la gente cuando quieran buscar ya sea un gimnasio cercano,una dieta para cuidarse o un entrenador que los ayudara a entrar en este mundo de cuidados fisicos.</p>
          <h4 id="scrollspyHeading2">¿Para qué sirve la página?</h4>
          <p>Como comentabamos anteriormente, ésta página sirve para facilitar el trabajo de buscar un gimnasio cercano y económico, además de esto, te ayuda y busca la dieta que desees según el cuerpo que desees, ya sea para el volumen, bajar de peso o simplemente mejorar tu alimentación. También te ayuda encontrando entrenadores experimentados y clasificados para todas las personas, ya sea para quien quiera empezar en el mundo fitness o ya para los experimentados.</p>
          <h4 id="scrollspyHeading3">¿Para quién va dirigido?</h4>
          <p>Para cualquier tipo de persona en general, ya que se enfoca en lo saludable y lo fitness, por lo tanto cualquier persona que se quiera informar sobre el tema o quiera entrar en alguna sección de la página,lo puede hacer sin ningún problema.</p>
        </div>
      </div>
      </div>
  );
}
      
export default Portada;
