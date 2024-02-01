import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary rounded" aria-label="Eleventh navbar example">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">TextUtils</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarsExample09">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">About</a>
            </li>
          </ul>
          <form role="search">
            <input className="form-control" type="search" placeholder="Search" aria-label="Search"/>
          </form>
        </div>
      </div>
    </nav>
    </>
  );
}

export default App;
