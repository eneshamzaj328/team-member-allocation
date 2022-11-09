import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="container">
      <div className="row justify-content-center mt-3 mb-4">
        <div className="col-8 text-center">
          <h1 className="text-danger">404 - Page Not Found</h1>
          <h3>Page that you're looking for does not Exists.</h3>
          <Link
            to="/"
            className="d-inline-block mt-3 py-2 px-4 link-danger fs-3 text-decoration-none border-bottom border-2 rounded"
          >
            {"<"}&emsp;Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
