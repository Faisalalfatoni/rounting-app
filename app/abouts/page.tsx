import Link from "next/link";
import Salam from "../components/Salam";
import { cache } from "react";

const abouts = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
        <div className="container-fluid">
          <Link className="navbar-brand" href="http://localhost:3000/">
            Rounting App
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" href="http://localhost:3000/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/abouts">
                  About me
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <section className="d-flex justify-content-center align-items-center flex-column">
        <div className="card w-50 m-5">
          <div className="card-header text-center text-light bg-primary fw-bold fs-5">- Introduce MySelf -</div>
          <ul className="list-group list-group-flush fw-medium">
            <li className="list-group-item">Name : Faisal Alfa Toni</li>
            <li className="list-group-item">Class : 11 RPL</li>
            <li className="list-group-item">Hobby : Play Game</li>
          </ul>
        </div>
        <Salam />
      </section>
    </>
  );
};
export default abouts;
