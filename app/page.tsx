import Link from "next/link";
import Klik from "./components/Klik";

export default function Home() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-primary shadow p-3 mb-5" data-bs-theme="dark">
        <div className="container-fluid">
          <Link className="navbar-brand fw-bold" href="#">
            Rounting App
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" href="#">
                  Home
                </Link>
              </li>
              <li className="nav-item- text-hover">
                <Link className="nav-link " href="/abouts">
                  About me
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <section className="d-flex justify-content-center align-items-center flex-column">
        <h1 className="text-center p-5 text-primary">Faisal Alfa Toni</h1>
        <Klik />
      </section>
    </>
  );
}
