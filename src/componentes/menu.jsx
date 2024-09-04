import React from "react";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <div className="header">

      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Gym'star
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/gimnasios"
                >
                  Gimnasios
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/dietas">
                  Dietas
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/entrenadores">
                  Entrenadores
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container p-2">
        <form className="d-flex" role="Search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="¿Qué quieres buscar?"
            aria-label="Search"
          />
          <button type="button" className="btn btn-dark">
            Buscar
          </button>
        </form>
      </div>
      <div className="p-2">
        <div className="card text-center">
          <div className="card-header" style={{ backgroundColor: "#dadad7" }}>
            <strong>Bienvenido a Gym'star</strong>
          </div>
          <div className="card-body" style={{ backgroundColor: "#fffd7e" }}>
            <h3 className="Encabezado fst-italic">Encuentra diferentes maneras de iniciar una vida saludable</h3>
            <p className="card-text">
             Nuestro propósito es{" "}
              <strong>ayudarte</strong> a alcanzar tu bienestar físico y mental.	
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
