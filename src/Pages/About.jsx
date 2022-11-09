import { Link } from "react-router-dom";

const About = () => {
  return (
    <section id="about" className="container-fluid">
      <div className="mx-auto text-center">
        <h1 className="lead fs-4">Version: 1.0.0</h1>
        <p className="my-4 lead fs-4 fw-lighter fst-italic">
          TMA using React JS
        </p>
        <span className="lead fs-4 fw-lighter fst-italic">
          By:&ensp;Enes Hamzaj
        </span>
        <div>
          <ul className="pagination justify-content-center mt-4">
            <li className="page-item">
              <Link
                to="/"
                className="px-4 page-link bg-secondary link-light fs-5 border border-3"
              >
                Continue&ensp;{">"}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
