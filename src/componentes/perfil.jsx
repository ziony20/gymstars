import React from "react";
import { Link } from "react-router-dom";

function Profile() {
  return (
    <section style={{ backgroundColor: "#fff000" }}>
      <div className="container py-4">
        <div className="row">
          <div className="col-lg-4">
            <div className="card mb-4">
              <div className="card-body text-center">
                <img
                  src="https://pub-static.fotor.com/assets/projects/pages/d5bdd0513a0740a8a38752dbc32586d0/fotor-03d1a91a0cec4542927f53c87e0599f6.jpg"
                  alt="avatar"
                  className="rounded-circle img-fluid"
                  style={{ width: "150px" }}
                />
                <h5 className="my-3">Juan Andrés Ríos Tapias</h5>
                <p className="text-muted mb-4">Medellín, Colombia</p>
                <div className="d-flex justify-content-center mb-2">
                  <button type="button" className="btn btn-primary">
                    Editar perfil
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="card mb-4">
              <div className="card-body">
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Nombre completo</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">Juan Andrés Ríos Tapias</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Gmail</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">juanandresrios29@gmail.com</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Teléfono</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">No tiene</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Celular</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">3027689419</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Ciudad</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">
                      Medellín, Colombia
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile;
